function buildColors() {
    const colors = COLORS_ACTIVE_ARRAY.reduce((prev, color) => prev + `<div id="${color.value}" class='product-color-large' style="background-color: ${color.value}"></div>`, "")
    document.getElementById("color-filters").innerHTML = colors
}

function buildOptions() {
    let options = CATEGORIES_ACTIVE_ARRAY.reduce((prev, option) => prev + `<option value="${option.name}">${option.name}</option>`, "")
    options = '<option value=" " disabled selected>Выберите категорию</option><option value="">Все</option>' + options
    document.getElementById("filter-select").innerHTML = options
}

function buildProducts() {
    let products = ITEMS_ACTIVE_ARRAY
    if (!areFiltersClean()) {
        products = products.filter((ob) => {
            if (TEXT_FILTER && !ob.name.toLowerCase().includes(TEXT_FILTER.toLowerCase())) {
                return false
            }
            if (CATEGORY_FILTER && !ob.category.name.toLowerCase().includes(CATEGORY_FILTER.toLowerCase())) {
                return false
            }
            if (ACTIVE_COLORS_FILTER.length) {
                for (const col of ACTIVE_COLORS_FILTER) {
                    if (!ob.colors.map((val) => val.value).includes(col)) {
                        return false
                    }
                }
            }
            return true
        })
    }
    if (!products.length) {
        document.getElementById("no-products-found").classList.add("display")
    } else {
        document.getElementById("no-products-found").classList.remove("display")
    }
    products = products.reduce((prev, item) => prev + `
        <div class="product">
            <div class="product-image-and-overlay" style="background-image: url(./assets/images/products/${item.photos[0]})"></div>
            <div class="product-category-colors">
                <div>${item.category.name}</div>
                <div class="product-colors-container">
                    ${item.colors.reduce((prevC, color) => prevC + `<div title="${color.name}" style="background-color: ${color.value}" class="product-color-small"></div>`, "")}
                </div>
            </div>
            <div class="product-title-and-price">
                <div class="product-title">${item.name}</div>
                <div class="product-price">${item.price ? (item.price + " руб.") : ""} </div>
            </div>
        </div>`, "")
    document.getElementById("products-grid").innerHTML = products
}

function buildColors2() {
    const colors = COLORS_ACTIVE_ARRAY.reduce((prev, color) => prev + `<div id="${color.value}-2" class='product-color-large-2' style="background-color: ${color.value}"></div>`, "")
    document.getElementById("color-filters-2").innerHTML = colors
}

function buildProducts2() {
    let products = ITEMS_ACTIVE_ARRAY_2
    if (!areFiltersClean2()) {
        products = products.filter((ob) => {
            if (TEXT_FILTER_2 && !ob.name.toLowerCase().includes(TEXT_FILTER_2.toLowerCase())) {
                return false
            }
            if (ACTIVE_COLORS_FILTER_2.length) {
                for (const col of ACTIVE_COLORS_FILTER_2) {
                    if (!ob.colors.map((val) => val.value + "-2").includes(col)) {
                        return false
                    }
                }
            }
            return true
        })
    }
    if (!products.length) {
        document.getElementById("no-products-found-2").classList.add("display")
    } else {
        document.getElementById("no-products-found-2").classList.remove("display")
    }
    products = products.reduce((prev, item) => prev + `
        <div class="product">
            <div class="product-image-and-overlay" style="background-image: url(./assets/images/products/${item.photos[0]})"></div>
            <div class="product-category-colors">
                <div>${item.category.name}</div>
                <div class="product-colors-container">
                    ${item.colors.reduce((prevC, color) => prevC + `<div title="${color.name}" style="background-color: ${color.value}" class="product-color-small"></div>`, "")}
                </div>
            </div>
            <div class="product-title-and-price">
                <div class="product-title">${item.name}</div>
                <div class="product-price">${item.price ? (item.price + " руб.") : ""} </div>
            </div>
        </div>`, "")
    document.getElementById("products-grid-2").innerHTML = products
}

function buildColors3() {
    const colors = COLORS_ACTIVE_ARRAY.reduce((prev, color) => prev + `<div id="${color.value}-3" class='product-color-large-3' style="background-color: ${color.value}"></div>`, "")
    document.getElementById("color-filters-3").innerHTML = colors
}

function buildProducts3() {
    let products = ITEMS_ACTIVE_ARRAY_3
    if (!areFiltersClean3()) {
        products = products.filter((ob) => {
            if (TEXT_FILTER_3 && !ob.name.toLowerCase().includes(TEXT_FILTER_3.toLowerCase())) {
                return false
            }
            if (ACTIVE_COLORS_FILTER_3.length) {
                for (const col of ACTIVE_COLORS_FILTER_3) {
                    if (!ob.colors.map((val) => val.value + "-3").includes(col)) {
                        return false
                    }
                }
            }
            return true
        })
    }
    if (!products.length) {
        document.getElementById("no-products-found-3").classList.add("display")
    } else {
        document.getElementById("no-products-found-3").classList.remove("display")
    }
    products = products.reduce((prev, item) => prev + `
        <div class="product">
            <div class="product-image-and-overlay" style="background-image: url(./assets/images/products/${item.photos[0]})"></div>
            <div class="product-category-colors">
                <div>${item.category.name}</div>
                <div class="product-colors-container">
                    ${item.colors.reduce((prevC, color) => prevC + `<div title="${color.name}" style="background-color: ${color.value}" class="product-color-small"></div>`, "")}
                </div>
            </div>
            <div class="product-title-and-price">
                <div class="product-title">${item.name}</div>
                <div class="product-price">${item.price ? (item.price + " руб.") : ""} </div>
            </div>
        </div>`, "")
    document.getElementById("products-grid-3").innerHTML = products
}

function buildColors4() {
    const colors = COLORS_ACTIVE_ARRAY.reduce((prev, color) => prev + `<div id="${color.value}-4" class='product-color-large-4' style="background-color: ${color.value}"></div>`, "")
    document.getElementById("color-filters-4").innerHTML = colors
}

function buildProducts4() {
    let products = ITEMS_ACTIVE_ARRAY_4
    if (!areFiltersClean4()) {
        products = products.filter((ob) => {
            if (TEXT_FILTER_4 && !ob.name.toLowerCase().includes(TEXT_FILTER_4.toLowerCase())) {
                return false
            }
            if (ACTIVE_COLORS_FILTER_4.length) {
                for (const col of ACTIVE_COLORS_FILTER_4) {
                    if (!ob.colors.map((val) => val.value + "-4").includes(col)) {
                        return false
                    }
                }
            }
            return true
        })
    }
    if (!products.length) {
        document.getElementById("no-products-found-4").classList.add("display")
    } else {
        document.getElementById("no-products-found-4").classList.remove("display")
    }
    products = products.reduce((prev, item) => prev + `
        <div class="product">
            <div class="product-image-and-overlay" style="background-image: url(./assets/images/products/${item.photos[0]})"></div>
            <div class="product-category-colors">
                <div>${item.category.name}</div>
                <div class="product-colors-container">
                    ${item.colors.reduce((prevC, color) => prevC + `<div title="${color.name}" style="background-color: ${color.value}" class="product-color-small"></div>`, "")}
                </div>
            </div>
            <div class="product-title-and-price">
                <div class="product-title">${item.name}</div>
                <div class="product-price">${item.price ? (item.price + " руб.") : ""} </div>
            </div>
        </div>`, "")
    document.getElementById("products-grid-4").innerHTML = products
}

function checkWhichProductArraysAreEmptyAndClean() {
    if (!ITEMS_ACTIVE_ARRAY_2.length) {
        document.getElementById("section-prod-2-pt1").style.display = "none"
        document.getElementById("section-prod-2-pt2").style.display = "none"
    }
    if (!ITEMS_ACTIVE_ARRAY_3.length) {
        document.getElementById("section-prod-3-pt1").style.display = "none"
        document.getElementById("section-prod-3-pt2").style.display = "none"
    }
    if (!ITEMS_ACTIVE_ARRAY_4.length) {
        document.getElementById("section-prod-4-pt1").style.display = "none"
        document.getElementById("section-prod-4-pt2").style.display = "none"
    }
}