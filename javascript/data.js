class Color {
    constructor(name, value) {
        this.name = name;
        this.value = value
    }
}

const COLOR_LAVANDER = new Color("Лаванда", "#B57EDC")
const COLOR_WHITE = new Color("Белый", "#ffffff")
const COLOR_YELLOW = new Color("Желтый", "#e9f032")
const COLOR_ROSE = new Color("Розовый", "#faa7d9")
const COLOR_BLUE = new Color("Синий", "#5c74ff")
const COLOR_ORANGE = new Color("Oранжевый", "#ffa85c")
const COLOR_RED = new Color("Красный", "#ff2626")
const COLOR_GREEN = new Color("Зеленый", "#5cff77")

const COLORS_ACTIVE_ARRAY = [
    COLOR_LAVANDER,
    COLOR_WHITE,
    COLOR_YELLOW,
    COLOR_ROSE,
    COLOR_BLUE,
    COLOR_ORANGE,
    COLOR_RED,
    COLOR_GREEN
]

class Category {
    constructor(name) {
        this.name = name
    }
}

const CATEGORY_BOUQUET = new Category("Цветы")
const CATEGORY_STUFFED = new Category("Игрушки ручной работы")

const CATEGORIES_ACTIVE_ARRAY = [
    CATEGORY_BOUQUET,
    CATEGORY_STUFFED
]

class Item {
    /**
     * 
     * @param {String} name 
     * @param {String} description 
     * @param {String[]} photos
     * @param {Category} category 
     * @param {Color[]} colors 
     * @param {Number} price
     */
    constructor(name, description, photos, category, colors, price) {
        this.name = name
        this.description = description
        this.photos = photos
        this.category = category
        this.colors = colors
        this.price = price
    }
}

const ITEM_FLOWER_1 = new Item("Волшебное лето", "", ["flower1.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_WHITE, COLOR_YELLOW, COLOR_BLUE], 195)
const ITEM_FLOWER_2 = new Item("Ванильный пломбир", "", ["flower2.jpeg"], CATEGORY_BOUQUET, [COLOR_WHITE], 37)
const ITEM_FLOWER_3 = new Item("Букет 2", "", ["flower3.jpeg"], CATEGORY_BOUQUET, [COLOR_YELLOW, COLOR_ROSE, COLOR_ORANGE, COLOR_GREEN], 85)
const ITEM_FLOWER_4 = new Item("Букет 3", "", ["flower4.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_WHITE, COLOR_YELLOW, COLOR_ORANGE, COLOR_GREEN], 85)
const ITEM_FLOWER_5 = new Item("Букет 4", "", ["flower5.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_WHITE, COLOR_ORANGE], 85)
const ITEM_FLOWER_6 = new Item("Букет 5", "", ["flower6.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_LAVANDER, COLOR_WHITE, COLOR_ORANGE, COLOR_YELLOW], 85)
const ITEM_FLOWER_7 = new Item("Букет 6", "", ["flower7.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_LAVANDER, COLOR_GREEN], 85)
const ITEM_FLOWER_8 = new Item("Букет 7", "", ["flower8.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_WHITE, COLOR_YELLOW, COLOR_GREEN], 85)
const ITEM_FLOWER_9 = new Item("Букет 8", "", ["flower9.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE], 85)
const ITEM_FLOWER_10 = new Item("Букет 9", "", ["flower10.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_GREEN], 85)
const ITEM_FLOWER_11 = new Item("Букет 10", "", ["flower11.jpeg"], CATEGORY_BOUQUET, [COLOR_YELLOW], 85)
const ITEM_FLOWER_12 = new Item("Букет 11", "", ["flower12.jpeg"], CATEGORY_BOUQUET, [COLOR_YELLOW, COLOR_LAVANDER, COLOR_GREEN], 35)
const ITEM_FLOWER_13 = new Item("Букет 12", "", ["flower13.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_WHITE, COLOR_YELLOW], 35)
const ITEM_FLOWER_14 = new Item("Букет 13", "", ["flower14.jpeg"], CATEGORY_BOUQUET, [COLOR_WHITE, COLOR_ORANGE, COLOR_YELLOW], 35)
const ITEM_FLOWER_15 = new Item("Букет 14", "", ["flower15.jpeg"], CATEGORY_BOUQUET, [COLOR_ROSE, COLOR_LAVANDER, COLOR_WHITE, COLOR_GREEN], 300)
const ITEM_FLOWER_16 = new Item("Букет 15", "", ["flower16.jpeg"], CATEGORY_BOUQUET, [COLOR_WHITE, COLOR_ORANGE, COLOR_YELLOW], 45)
const ITEM_FLOWER_17 = new Item("Букет 16", "", ["flower17.jpeg"], CATEGORY_BOUQUET, [COLOR_WHITE, COLOR_ORANGE, COLOR_ROSE, COLOR_RED], 45)
const ITEM_FLOWER_18 = new Item("Букет 17", "", ["flower18.jpeg"], CATEGORY_BOUQUET, [COLOR_WHITE, COLOR_GREEN], 210)
const ITEM_FLOWER_19 = new Item("Букет 18", "", ["flower19.jpeg"], CATEGORY_BOUQUET, [COLOR_WHITE, COLOR_YELLOW, COLOR_GREEN], 160)
const ITEM_TOY_1 = new Item("Игрушка 1", "", ["toy1.jpeg"], CATEGORY_STUFFED, [COLOR_LAVANDER], 20)
const ITEM_TOY_2 = new Item("Игрушка 2", "", ["toy2.jpeg"], CATEGORY_STUFFED, [COLOR_WHITE, COLOR_YELLOW], 20)
const ITEM_TOY_3 = new Item("Игрушка 3", "", ["toy3.jpeg"], CATEGORY_STUFFED, [COLOR_GREEN], 20)
const ITEM_TOY_4 = new Item("Игрушка 4", "", ["toy4.jpeg"], CATEGORY_STUFFED, [COLOR_LAVANDER, COLOR_YELLOW], 20)

const ITEMS_ACTIVE_ARRAY = [
    ITEM_FLOWER_1,
    ITEM_FLOWER_2,
    ITEM_FLOWER_3,
    ITEM_FLOWER_4,
    ITEM_FLOWER_5,
    ITEM_FLOWER_6,
    ITEM_FLOWER_7,
    ITEM_FLOWER_8,
    ITEM_FLOWER_9,
    ITEM_FLOWER_10,
    ITEM_FLOWER_11,
    ITEM_FLOWER_12,
    ITEM_FLOWER_13,
    ITEM_FLOWER_14,
    ITEM_FLOWER_15,
    ITEM_FLOWER_16,
    ITEM_FLOWER_17,
    ITEM_FLOWER_18,
    ITEM_FLOWER_19,
]

const ITEMS_ACTIVE_ARRAY_2 = [
    ITEM_TOY_1,
    ITEM_TOY_2,
    ITEM_TOY_3,
    ITEM_TOY_4
]