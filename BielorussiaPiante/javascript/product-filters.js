let ACTIVE_COLORS_FILTER = []
let TEXT_FILTER = ""
let CATEGORY_FILTER = ""

$(function () {
    $(".product-color-large").on("click", ({ target: { id } }) => handleColorSelect(id))
    $("#input-search").on("input", ({ target: { value } }) => handleInputFilter(value))
    $("#filter-select").on("input", ({ target: { value } }) => handleCategoryFilter(value))
});

function handleColorSelect(val) {
    if (ACTIVE_COLORS_FILTER.includes(val)) {
        ACTIVE_COLORS_FILTER = ACTIVE_COLORS_FILTER.filter((col) => val !== col)
    } else {
        ACTIVE_COLORS_FILTER.push(val)
    }
    printColors()
}

function handleInputFilter(value) {
    TEXT_FILTER = value
    buildProducts()
}

function handleCategoryFilter(value) {
    CATEGORY_FILTER = value
    buildProducts()
}

function printColors() {
    COLORS_ACTIVE_ARRAY.forEach(({ value }) => {
        const selItem = document.getElementById(value)
        if (ACTIVE_COLORS_FILTER.includes(value)) {
            selItem.classList.add("active-color")
        } else {
            selItem.classList.remove("active-color")
        }
    })
    buildProducts()
}

function areFiltersClean() {
    return !ACTIVE_COLORS_FILTER.length && !TEXT_FILTER && !CATEGORY_FILTER
}