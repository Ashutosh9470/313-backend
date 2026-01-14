from sklearn.feature_extraction.text import TfidfVectorizer

BLOCKLIST = {
    "launch", "event", "introducing", "hands",
    "september", "review", "official", "apple"
}


def detect_competitors(data, main_product):
    # Extract clean titles only
    titles = [
        d["title"].lower()
        for d in data
        if d.get("title") and len(d["title"].strip()) > 3
    ]

    # 🚨 Critical guard
    if len(titles) < 2:
        return []

    try:
        vectorizer = TfidfVectorizer(
            stop_words="english",
            min_df=1
        )
        X = vectorizer.fit_transform(titles)
        keywords = vectorizer.get_feature_names_out()

        rivals = []
        for word in keywords:
            if word not in BLOCKLIST and len(word) > 4:
                rivals.append(word)

        return list(set(rivals))[:5]

    except Exception as e:
        print("Competitor detection error:", e)
        return []
