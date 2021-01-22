// https://github.com/Mohammadmostafazaman/ThirdAssignment

// Problem Solving#01: kilometer To Meter 

function kilometerToMeter(kilometer) {
    var GetMeter = kilometer * 1000;
    return GetMeter;
}
var ResultMeter = kilometerToMeter(1);

console.log(ResultMeter);// Console Output

// Problem Solving#02: budgetCalculator

function budgetCalculator(Watch, Phone, Laptop) {
    var WatchPrice = Watch * 50;
    var PhonePrice = Phone * 100;
    var LaptopPrice = Laptop * 500;
    var GetTotalPrice = WatchPrice + PhonePrice + LaptopPrice;
    return GetTotalPrice;
}

var BudgetResult = budgetCalculator(1, 2, 3);

console.log(BudgetResult);// Console Output

// Problem Solving#03: Finding hotel Cost

function hotelCost(DayCount) {
    var TotalPrice = 0;
    if (DayCount <= 10) {
        TotalPrice = DayCount * 100;
    } else if (DayCount <= 20) {
        var FirstStayPrice = 10 * 100;
        var SecondStay = DayCount - 10;
        var SecondStayPrice = SecondStay * 80;
        var TotalPrice = FirstStayPrice + SecondStayPrice;
    } else {
        var FirstStayPrice = 10 * 100;
        var SecondStayPrice = 10 * 80;
        var ThirdStay = DayCount - 20;
        var ThirdStayPrice = ThirdStay * 50;
        var TotalPrice = FirstStayPrice + SecondStayPrice + ThirdStayPrice;
    }
    return TotalPrice;
}

var GetHotelCost = hotelCost(21);

console.log(GetHotelCost); // Console Output

// Problem Solving#04:Mega Friend


function megaFriend(FriendsName) {
    var LongestName = '';
    for (var i = 0; i < FriendsName.length; i++) {
        if (LongestName.length < FriendsName[i].length) {
            LongestName = FriendsName[i];
        }
    }
    return LongestName;
}

// Friends Name
var GetMegaFriend = megaFriend([
    'Mohammad Mostafa Zaman Rajib',
    'Abdus Salam',
    'Masum Billah Billai',
]);

console.log(GetMegaFriend); // Console Output
