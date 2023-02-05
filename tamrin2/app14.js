const data = [
    { "parentName": null, "name": "دسته‌بندی‌های دیجی‌کالا" },
    { "parentName": "دسته‌بندی‌های دیجی‌کالا", "name": "کالای دیجیتال" },
    { "parentName": "کالای دیجیتال", "name": "لوازم جانبی گوشی" },
    { "parentName": "لوازم جانبی گوشی", "name": "کیف و کاور گوشی" },
    { "parentName": "لوازم جانبی گوشی", "name": "پاور بانک (شارژر همراه)" },
    { "parentName": "کالای دیجیتال", "name": "اسپیکر بلوتوث" },
    { "parentName": "کالای دیجیتال", "name": "کامپیوتر و تجهیزات جانبی" },
    { "parentName": "کامپیوتر و تجهیزات جانبی", "name": "تجهیزات مخصوص بازی" },
    { "parentName": "کامپیوتر و تجهیزات جانبی", "name": "مانیتور" },
    { "parentName": "کامپیوتر و تجهیزات جانبی", "name": "قطعات داخلی کامپیوتر" },
    { "parentName": "دسته‌بندی‌های دیجی‌کالا", "name": "کالاهای سوپرمارکتی" },
    { "parentName": "کالاهای سوپرمارکتی", "name": "کالای اساسی و خوار و بار" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "نان" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "برنج" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "روغن" },
    { "parentName": "کالای اساسی و خوار و بار", "name": "قند" },
    { "parentName": "دسته‌بندی‌های دیجی‌کالا", "name": "خانه و آشپزخانه" }];

const buildTree = (data) =>
    data.reduce((tree, item) => {
        if (!tree[item.parentName]) {
            tree[item.parentName] = [];
        }
        tree[item.parentName][item.name] = {};
        return tree;
    }, {});

const tree = buildTree(data);
console.log(tree);    