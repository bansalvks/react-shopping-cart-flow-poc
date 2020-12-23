const MockData = [
    {
        id: 1,
        name: 'Coco Powder',
    },
    {
        id: 2,
        name: 'Chocolates',
    },
    {
        id: 3,
        name: 'Kit-Kat',
    },
    {
        id: 4,
        name: '5 Star',
    },
    {
        id: 5,
        name: 'Fuse',
    },
];

const getProductsApi = () => Promise.resolve(MockData);

export default getProductsApi;
