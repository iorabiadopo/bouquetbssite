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