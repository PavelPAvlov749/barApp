//In this file, an array [] of <object> is created that describes the product model and their list.
//Each product object includes such fields as a name, a unique identifier, composition, 
//a description of the cooking technology, 
//as well as a calculate () method for calculating the required number of ingredients relative to the required volume of the product.

//Declare type for product object
export type productType = {
    name: string,
    description: string,
    composition: {},
    id: string,
    calculate: (val: number) => {}
}

export const Products: productType[] = [
    {
        name: "Apple Cordial",
        description: "Все ингредиенты размешать до однородной консистенции. Разлить поемкостям. Запас хранить в вакуумных пакетах в холодильнике",
        composition: {
            Яблочный_сок: 1000,
            Сахарный_сироп: 500,
            Лимонная_кислота: 40,
            Соль: 3
        },
        id: "applecord",
        calculate: (val: number) => {
            return {
                Яблочный_сок: val * 1000,
                Сахарный_сироп: val * 500,
                Лимонная_кислота: val * 40,
                Соль: 3
            }
        }
    },
    {
        name: "Amber mix",
        description: "В блендере смешать Бурбон, ириски и апельсиновый сок. Разогреть молоко в него влить смесь. Медленно и помешивая влить лимонный сок. Убрать в холодильник на 2 часа. Отфильтровать через супербэг.",
        composition: {
            Бурбон: 500,
            Ириски: 250,
            Апельсиновый_сок: 300,
            Лимонный_сок: 25,
            Молоко: 150,
        },
        id: "ambermix",
        calculate: (val: number) => {
            return {
                Бурбон: 500 * val,
                Ириски: 250 * val,
                Апельсиновый_сок: 300 * val,
                Лимонный_сок: 25 * val,
                Молоко: 150 * val,
            }
        }
    },
    {
        name: "Kinoto Cordial",
        description: "wfefwef",
        composition: {
            apple_juice: 500,
            simple_syryp: 250,
            lemon_acid: 40
        },
        id: "kinotocord",
        calculate: (val: number) => {
            return {
                apple_juice: val * 500,
                simple_syryp: val * 250,
                lemon_acid: val * 40
            }
        }
    }, {
        name: "Ginger Cordial",
        description: "Имбирь хорошо помыть, почистить, порезать на части. Приготовить сахарный сироп. Смешать в блендере и перебить все ингредиенты. Оставить настаиваться в течение 30 минут. Профильтровать, разлить по емкостям. Запас хранить в вакуумных пакетах в холодильнике.",
        composition: {
            Корень_имбиря: 150,
            Сахар_песок: 500,
            Вода: 500,
            Ранчо: 250
        },
        id: "gingercord",
        calculate: (val: number) => {
            return {
                Корень_имбиря: val * 150,
                Сахар_песок: val * 500,
                Вода: val * 500,
                Ранчо: 250 * val
            }
        }
    }, {
        name: "Basil Cordial",
        description: "Все ингредиенты пробить в блендере. Дать постоять 20 мин. Отфильтровать через супербэг 2 раза. Хранить в вакуумных пакетах.",
        composition: {
            Лимонный_сок: 500,
            Сахарный_сироп: 500,
            Базилик: 150
        },
        id: "basilecord",
        calculate: (val: number) => {
            return {
                Лимонный_сок: val * 500,
                Сахарный_сироп: val * 500,
                Базилик: val * 150
            }
        }
    }, {
        name: "Прянный_сироп",
        description: "Смешать ингредиенты в сотейнике, нагреть и размешать до полного растворения сахара. Оставить настаиваться в течение 30 минут на медленном огне. Остудить, профильтровать, разлить по емкостям. Запас хранить в вакуумных пактах в холодильнике.",
        composition: {
            Сахар_песок: 1000,
            Вода: 1000,
            Анис: 4,
            Корица_палочки: 4,
            Гвоздика: 8,
            Кардамон: 6,
            Перец_Душистый: 12
        },
        id: "sipcysyrop",
        calculate: (val: number) => {
            return {
                Сахар_песок: 1000 * val,
                Вода: 1000 * val,
                Анис: 4 * val,
                Корица_палочки: 4 * val,
                Гвоздика: 8 * val,
                Кардамон: 6 * val,
                Перец_Душистый: 12 * val
            }
        }
    }, {
        name: "Пюре_ягодное",
        description: "Ягоду разморозить. Смешать в блендере и хорошо перебить все ингредиенты до однородной массы.Отфильтровать, разлить по емкостям. Запас хранить в вакуумных пакетах в холодильнике.",
        composition: {
            Ягода_замороженная: 300,
            Сахар_песок: 200,
            Вода: 200,
        },
        id: 'Berry',
        calculate: (val: number) => {
            return {
                Ягода_замороженная: 300 * val,
                Сахар_песок: 200 * val,
                Вода: 200 * val,
            }
        }
    }, {
        name: "Клюквенный Морс",
        description: "Клюкву разморозить. Смешать все ингредиенты в сотейнике, нагреть до растворения сахара. Довести до кипения. Остудить. Пробить в блендере. Хорошо профильтровать. Разлить по емкостям. Запас хранить в вакуумных пакетах в холодильнике.",
        composition: {
            Клюква_замороженная: 300,
            Сахар_песок: 120,
            Вода: 1000
        },
        id: "strawberryjuice",
        calculate: (val: number) => {
            return {
                Клюква_замороженная: 300 * val,
                Сахар_песок: 120 * val,
                Вода: 1000 * val,
            }
        }
    }, {
        name: "Медовый Сироп",
        description: "Смешать мед с горячей водой, размешать до однородной консистенции. Разлить по емкостям. Запас хранить в вакуумных пакетах в холодильнике.",
        composition: {
            Мед: 1.4,
            Вода: 1
        },
        id: "honeysyrop",
        calculate: (val: number) => {
            return {
                Мед: 1.4 * val,
                Вода: 1 * val,
            }
        }
    },
    {
        name: "Шиповник",
        description: "Шиповник с сахаром перебить в блендере. Варить на медленном огне, после закипания 10 мин, дать остыть, отфильтровать, разлить по емкостям.",
        composition: {
            Шиповник_сушеный: 300,
            Вода: 5000,
            Сахар: 300
        },
        id: "shipovnik",
        calculate: (val: number) => {
            return {
                Шиповник_сушеный: 300,
                Вода: 5000,
                Сахар: 300
            }
        }
    }, {
        name: "Содовая_Саган-дайля",
        description: "Залить кипятком на 2 часа, охладить, разлить по бутылкам, газировать перед сменой.",
        composition: {
            Саган_дайля: 5,
            Кипяток: 1000
        },
        id: "saganSoda",
        calculate: (val: number) => {
            return {
                Саган_дайля: 5 * val,
                Кипяток: 1000 * val,
            }
        }
    }, {
        name: "Содовая_Каркаде",
        description: "Залить кипятком на 2 часа, охладить, разлить по бутылкам, газировать перед сменой.",
        composition: {
            Каркаде: 5,
            Кипяток: 1000
        },
        id: "HibiscusSoda",
        calculate: (val: number) => {
            return {
                Каркаде: 5 * val,
                Кипяток: 1000 * val,
            }
        }
    },
    {
        name: "Грушевая_настойка",
        description: "Смешать все ингредиенты, упаковать в вакуумный пакет (разделить в зависимости от размера пакетов). Варить в сю-виде в течение 2 часов при температуре 58 градусов, либо 2 недели настаивать в банке в темном прохладном месте. Хорошо профильтровать, разлить по бутылкам, хранить в морозилке",
        composition: {
            Груша: 300,
            Водка: 1000,
            Корица_палка: 0.5,
            Гвоздика: 3,
            Имбирь: 20,
            Вода: 200,
            Лимонная_кислота: 2,
            Сахар_песок: 150
        },
        id: "pear",
        calculate: (val: number) => {
            return {
                Груша: 300,
                Водка: 1000,
                Корица_палка: 0.5,
                Гвоздика: 3,
                Имбирь: 20,
                Вода: 200,
                Лимонная_кислота: 2,
                Сахар_песок: 150
            }
        }
    }
]