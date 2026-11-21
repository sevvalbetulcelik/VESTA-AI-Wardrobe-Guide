
const searchInput = document.getElementById("searchInput");
const clearButton = document.getElementById("clearSearch");
const contentCards = document.querySelectorAll(".content-card");
const resultCount = document.getElementById("resultCount");
const emptyMessage = document.getElementById("emptyMessage");

if (searchInput) {
    function filterContents() {
        const searchValue = searchInput.value
            .trim()
            .toLocaleLowerCase("tr-TR");

        let visibleCount = 0;

        contentCards.forEach(card => {
            const title = card.querySelector("h3")
                .textContent.toLocaleLowerCase("tr-TR");

            const isMatch = title.includes(searchValue);

            card.hidden = !isMatch;

            if (isMatch) visibleCount++;
        });

        resultCount.textContent =
            `${visibleCount} içerik gösteriliyor.`;

        emptyMessage.hidden = visibleCount !== 0;
    }

    searchInput.addEventListener("input", filterContents);

    clearButton.addEventListener("click", () => {
        searchInput.value = "";
        filterContents();
        searchInput.focus();
    });

    filterContents();
}
