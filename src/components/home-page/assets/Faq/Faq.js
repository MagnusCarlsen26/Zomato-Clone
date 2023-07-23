const arr = [
    {
        Q : 'Popular cuisines near me',
        A :  [
            'Bakery food near me',
            'Beverages food near me',
            'Biryani food near me',
            'Burger food near me',
            'Chinese food near me',
            'Coffee food near me',
            'Desserts food near me',
            'Gujarati food near me',
            'Ice Cream food near me',
            'Italian food near me',
            'Mughlai food near me',
            'North Indian food near me',
            'Pasta food near me',
            'Pizza food near me',
            'Sandwich food near me',
            'Shake food near me',
            'Sichuan food near me'
        ]
    },
    {
        Q : 'Popular restaurant types near me',
        A : [
            'Bakeries near me',
            'Bars near me',
            'Bhojanalya near me',
            'Beverage Shops near me',
            'Cafés near me',
            'Casual Dining near me',
            'Dessert Parlors near me',
            'Dhabas near me',
            'Fine Dining near me',
            'Food Courts near me',
            'Food Trucks near me',
            'Kiosks near me'
        ]
    },
    {
        Q : 'Top Restaurant Chains',
        A : [
            'Burger King',
            'KFC',
            'McDonald',
            'Pizza Hut',
            'Subway'
        ]
    }
]
const final = arr.map( (item) => {
    return (
        {
            Q : item.Q,
            A : item.A.map( (restaurant) => {
                return restaurant+' • '
            })
        }
    )
})

export default final