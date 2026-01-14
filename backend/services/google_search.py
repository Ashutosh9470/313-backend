import requests

SERP_API_KEY = "REDACTED_SERP_API_KEY"

def fetch_google_mentions(query):
    url = "https://serpapi.com/search.json"
    params = {
        "q": query,
        "api_key": SERP_API_KEY,
        "num": 10
    }

    res = requests.get(url, params=params).json()

    mentions = []
    for r in res.get("organic_results", []):
        mentions.append({
            "platform": "google",
            "title": r.get("title"),
            "url": r.get("link"),
            "engagement": 1
        })

    return mentions
