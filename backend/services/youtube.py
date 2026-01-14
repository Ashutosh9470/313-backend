import requests

YOUTUBE_API_KEY = "REDACTED_YOUTUBE_API_KEY"

def fetch_youtube_mentions(query):
    print("🔥 YT FETCH CALLED WITH:", query)

    url = "https://www.googleapis.com/youtube/v3/search"
    params = {
        "part": "snippet",
        "q": query,
        "maxResults": 5,
        "type": "video",
        "key": YOUTUBE_API_KEY
    }

    response = requests.get(url, params=params, timeout=10)

    print("🔥 YT STATUS CODE:", response.status_code)
    print("🔥 YT RESPONSE TEXT:", response.text)

    data = response.json()

    mentions = []

    for item in data.get("items", []):
        mentions.append({
            "platform": "youtube",
            "title": item["snippet"]["title"],
            "url": f"https://www.youtube.com/watch?v={item['id']['videoId']}",
            "engagement": 10
        })

    print("🔥 YT MENTIONS COUNT:", len(mentions))
    return mentions
