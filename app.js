const companies =[
    {name: 'company 1', category:'Finance', start:1981, end:2003},
    {name: 'company 2', category:'Auto', start:1992, end:2008},
    {name: 'company 3', category:'Finance', start:1999, end:2007},
    {name: 'company 4', category:'Retail', start:1989, end:2010},
    {name: 'company 5', category:'Finance', start:2009, end:2014},
]

const ages = [33,35,2,1,44,59,96,74,5,62,12,36,45,64];

companies.forEach((company,index, allcom)=>{
    console.log(company.name)
});

const canDrink = ages.filter((age)=>{
    if(age>=21) return true;
});
console.log(canDrink);

const canDrink1 = ages.filter(age=> age>=21);
console.log(canDrink1);

const finance = companies.filter((company)=>{
    if(company.category === 'Finance') return true;
});
console.log(finance);

const finance1 = companies.filter((company)=>company.category === 'Finance');
console.log(finance1);

const eightiesCompanies = companies.filter((company)=>company.start >=1980 && company.start < 1990);
console.log(eightiesCompanies);

//map
const companyNames = companies.map((company)=>{
    return company.name
});
console.log(companyNames);

const companyNamesEdited = companies.map((company)=>{
    return `${company.name} [${company.start} - ${company.end}]`
});
console.log(companyNamesEdited);


//sort
const sortedCompanies = companies.sort((c1, c2)=>{
    if(c1.start > c2.start){
        return 1;
    }else{
        return -1;
    }
});
console.log(sortedCompanies);

const sortedCompanies1 = companies.sort((a,b)=>(a.start > a.start)? 1 : -1);
console.log(sortedCompanies1);

const sortAge = ages.sort((a,b)=>{
    if(a>b){
        return 1
    }else{
        return -1
    }
});
console.log(sortAge);

//reduce
const ageSum = ages.reduce((total, age)=>{
    return total + age
},0 );
console.log(ageSum);

const totalyear = companies.reduce((total, company)=>{
    return total + (company.end - company.start)
},0);
console.log(totalyear)

//foreach
//filter
//map
//sort
//reduce