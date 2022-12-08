const table = document.querySelector('.table')
const picture = document.querySelector('picture')
const fullname = document.querySelector('.fullname')
const Age = document.querySelector('.age')
const Phone = document.querySelector('.Phone-number')
const nation = document.querySelector('.nation')
const btn = document.querySelector('.btn')
const tbody = document.querySelector('tbody')

const url = 'https://randomuser.me/api/?results=10';

const getUserId = async () => {
    try{
    const resp = await fetch(url);
    const data = await resp.json();
    const userData = data.results
    const randomUserData = userData.map((details) =>{
        return `<tr>
            <td class="picture"><img src="${details.picture.large}" alt="avater"></td>
            <td class="fullname">${details.name.title} ${details.name.last} ${details.name.first}</td>
            <td class="age">${details.dob.age}</td>
            <td class="Phone-number">+${details.Phone}</td>
            <td class="nation">${details.id.nation}</td></tr>`
    })
    // console.log(randomUserData)
    // console.log(userData[0].picture.large)
    btn.addEventListener('click',()=>{
        // tbody.innerHTML = randomUserData
        tbody.insertAdjacentHTML('afterend',randomUserData)
        node
    })
        } catch(err){
            const error = `sorry "${err}" came up!!!`
            console.log(error);
        }
}
getUserId();

