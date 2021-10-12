let ACTIVE_COLORS_FILTER = []
let TEXT_FILTER = ""
let CATEGORY_FILTER = ""

$(function () {
    $(".product-color-large").on("click", ({ target: { id } }) => handleColorSelect(id))
    $("#input-search").on("input", ({ target: { value } }) => handleInputFilter(value))
    $(".product-color-large-2").on("click", ({ target: { id } }) => handleColorSelect2(id))
    $("#input-search-2").on("input", ({ target: { value } }) => handleInputFilter2(value))
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

let ACTIVE_COLORS_FILTER_2 = []
let TEXT_FILTER_2 = ""

function handleColorSelect2(val) {
    if (ACTIVE_COLORS_FILTER_2.includes(val)) {
        ACTIVE_COLORS_FILTER_2 = ACTIVE_COLORS_FILTER_2.filter((col) => val !== col)
    } else {
        ACTIVE_COLORS_FILTER_2.push(val)
    }
    printColors2()
}

function handleInputFilter2(value) {
    TEXT_FILTER_2 = value
    buildProducts2()
}

function printColors2() {
    COLORS_ACTIVE_ARRAY.forEach(({ value }) => {
        const selItem = document.getElementById(value + "-2")
        if (ACTIVE_COLORS_FILTER_2.includes(value + "-2")) {
            selItem.classList.add("active-color")
        } else {
            selItem.classList.remove("active-color")
        }
    })
    buildProducts2()
}

function areFiltersClean2() {
    return !ACTIVE_COLORS_FILTER_2.length && !TEXT_FILTER_2
}