const KEY = 'lifesaver_donors_v1'


function read(){
try{ return JSON.parse(localStorage.getItem(KEY))||[] }catch{ return [] }
}
function write(list){ localStorage.setItem(KEY, JSON.stringify(list)) }


export default {
addDonor(donor){
const list = read()
list.push({ ...donor, createdAt: new Date().toISOString() })
write(list)
},
getDonors(){ return read() },
findDonors({ bloodGroup, location }){
const list = read()
return list.filter(d => d.bloodGroup === bloodGroup && (!location || d.location.toLowerCase().includes(location.toLowerCase())))
}
}