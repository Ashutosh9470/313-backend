import requests

APIFY_TOKEN = "REDACTED_APIFY_TOKEN"

def fetch_instagram_mentions(keyword):
    url = "https://api.apify.com/v2/acts/apify~instagram-hashtag-scraper/run-sync-get-dataset-items"

    hashtag = keyword.replace(" ", "").lower()

    payload = {
        "hashtags": [hashtag],
        "resultsLimit": 10
    }

    params = {
        "token": APIFY_TOKEN
    }

    response = requests.post(url, json=payload, params=params, timeout=60)

    data = response.json()

    mentions = []

    for post in data:
        mentions.append({
            "platform": "instagram",
            "title": post.get("caption", ""),
            "url": post.get("url", ""),
            "engagement": (
                post.get("likesCount", 0)
                + post.get("commentsCount", 0)
            )
        })

    return mentions
