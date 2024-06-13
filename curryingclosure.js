function volume(l){
    return (b)=>{
        return (h)=>{
            return l*b*h;
        }
    }
}

let vol=volume(2)(3)(4)
console.log(`volume:${vol}`);