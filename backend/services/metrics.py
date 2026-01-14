def compute_metrics(data, product, competitors):
    total_mentions = len(data)

    # 🚨 HARD GUARD — NEVER CRASH
    if total_mentions == 0:
        return {
            "product_mentions": 0,
            "sov_percent": 0,
            "market_index": 0,
            "note": "Insufficient public data for analysis"
        }

    product_mentions = [
        d for d in data
        if product.lower() in d.get("title", "").lower()
    ]

    competitor_mentions = total_mentions - len(product_mentions)

    # Safe division
    sov = round((len(product_mentions) / total_mentions) * 100, 2)

    engagement_score = sum(d.get("engagement", 0) for d in product_mentions)

    market_index = round(
        (0.4 * len(product_mentions)) +
        (0.4 * engagement_score) +
        (0.2 * (len(product_mentions) / (competitor_mentions + 1))),
        2
    )

    return {
        "product_mentions": len(product_mentions),
        "sov_percent": sov,
        "market_index": market_index
    }
