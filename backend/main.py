from fastapi import FastAPI
from services.google_search import fetch_google_mentions
from services.youtube import fetch_youtube_mentions
from services.competitors import detect_competitors
from services.metrics import compute_metrics
from services.instagram import fetch_instagram_mentions


app = FastAPI(title="Market Intelligence Engine")

@app.get("/analyze")
def analyze(company: str, product: str):
    keyword = f"{company} {product}"

    google_data = fetch_google_mentions(keyword)
    youtube_data = fetch_youtube_mentions(keyword)
    instagram_data = fetch_instagram_mentions(product)


    all_data = google_data + youtube_data + instagram_data

    # ✅ Safe competitor detection
    competitors = detect_competitors(all_data, product) if all_data else []

    metrics = compute_metrics(all_data, product, competitors)

    return {
        "keyword": keyword,
        "total_mentions": len(all_data),
        "competitors": competitors,
        "metrics": metrics,
        "platform_breakdown": {
            "google": len(google_data),
            "youtube": len(youtube_data),
            "instagram": len(instagram_data)
        }
    }
