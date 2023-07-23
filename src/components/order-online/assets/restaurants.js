var arr = [
    {
        name : 'Theobroma',
        Cuisine : ['Bakery','Desserts','Street Food'],
        Rating : 4.1 ,
        AverageCost : 150 ,
        AverageTime : 17 , 
        Discount : '50% OFF upto 100',
        Delivery : 0 ,
        Promoted : true
    },
    {
        name : 'Mahalaxmi Juice center',
        Cuisine : ['Juice','Shake','Beverages','South Indian','Chinese','Street Food','Fast Food'],
        Rating : 4.3 ,
        AverageCost : 150 ,
        AverageTime : 14 , 
        Discount : '50% OFF upto 100',
        Delivery : 2 ,
        Promoted : false
    },
    {
        name : 'Kwality Walls From Frozen Desert',
        Cuisine : ['Ice Cream','Desserts'],
        Rating : 4.3 ,
        AverageCost : 150 ,
        AverageTime : 17 , 
        Discount : '50% OFF upto 100',
        Delivery : 0 ,
        Promoted : true
    },
    {
        name : 'Mcdonalds',
        Cuisine : ['Burger','Fast Food','Beverages','Tea','Coffee'],
        Rating : '4.0' ,
        AverageCost : 150 ,
        AverageTime : 15 , 
        Discount : '50% OFF upto 100',
        Delivery : 2 ,
        Promoted : false
    },
    {
        name : 'La Pinos Pizza',
        Cuisine : ['Pizza','Pasta','Italian','Fast Food'],
        Rating : 3.9 ,
        AverageCost : 150 ,
        AverageTime : 23 , 
        Discount : '50% off upto 100',
        Delivery : 2 ,
        Promoted : false
    },
    {
        name : 'Burger King',
        Cuisine : ['Burger','Fast Food','Desserts','Beverages'],
        Rating : 4.0 ,
        AverageCost : 150 ,
        AverageTime : 24 , 
        Discount : '',
        Delivery : 2 ,
        Promoted : false
    },
    {
        name : 'Jalaram Khicdi Restaurant',
        Cuisine : ['Gujarati','North Indian','Kathiyawadi'],
        Rating : 4.0 ,
        AverageCost : 200 ,
        AverageTime : 25 , 
        Discount : '50% OFF upto 100',
        Delivery : 1 ,
        Promoted : false
    },
    {
        name : 'Domino Pizza',
        Cuisine : ['Pizza','Italian','Fast Food','Desserts'],
        Rating : 3.9 ,
        AverageCost : 200 ,
        AverageTime : 25 , 
        Discount : '50% OFF upto 100',
        Delivery : 2 ,
        Promoted : false
    },
    {
        name : 'The Glorious Restaurant',
        Cuisine : ['North Indian','Chinese','Italian','Fast Food','Beverages','Desserts'],
        Rating : 3.9 ,
        AverageCost : 200 ,
        AverageTime : 20 , 
        Discount : '50% OFF upto 100',
        Delivery : 2 ,
        Promoted : false
    },
    {
        name : 'Krishna Restaurant',
        Cuisine : ['North Indian','Chinese','Fast Food','Street Food','Sandwhich','Pizza','Desserts'],
        Rating : 3.9 ,
        AverageCost : 200 ,
        AverageTime : 16 , 
        Discount : '',
        Delivery : 2 ,
        Promoted : false
    },    
    {
        name : 'Pizza Hut',
        Cuisine : ['Pizza','Italian','Fast Food','Desserts'],
        Rating : 3.3 ,
        AverageCost : 200 ,
        AverageTime : 28 , 
        Discount : '',
        Delivery : 2 ,
        Promoted : false
    },
    {
        name : 'Trishiv Chinese Corner',
        Cuisine : ['Chinese','Sichuan','Fast Food'],
        Rating : 3.5 ,
        AverageCost : 200 ,
        AverageTime : 21 , 
        Discount : '',
        Delivery : 1 ,
        Promoted : false
    },
]
const mySet = new Set(); 
arr = arr.map( (item) => {
    var temp = item.Cuisine

    temp = temp.map((cui)=> {
        mySet.add(cui)
        return cui + " "
    })
    item.Cuisine = temp
    return item
})

export default arr