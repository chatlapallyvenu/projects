// Whenever the percentage is Entered, then the following conditions must be satisfied.
//       a) Percentage between 40 to 50 => To print "Buy a pen."
//       b) Percentage between 50 to 60 => To print "Buy a Book."
//       c) Percentage between 60 to 70 => To print "Buy a Bag."
//       d) Percentage between 70 to 80 => To print "Buy a Watch."
//       e) Percentage between 80 to 90 => To print "Buy a Mobile."
//       f) Percentage between 90 to 100 => To print "Buy an Laptop."
//       g) otherwise => To print "Fail"


let percentage=30;

if (percentage>=40 && percentage<=50)
{
    console.log("buy a pen")
}
else if (percentage>50 && percentage<=60)

{
    console.log("buy a book")
}
else if (percentage>60 && percentage<=70)
{
    console.log("buy a bag")
}   
else if (percentage>70 && percentage<=80)
{
    console.log("buy a watch")
}
else if (percentage>80 && percentage<=90)
{
    console.log("buy a mobile")
}
else if (percentage>90 && percentage<=100)
{
    console.log("buy a laptop")
}
else
{
    console.log("fail")
}