class ProductManager{
    // Declaro id com atributo privado
    #id = 0;

    // Creo constructor con products vacio
    constructor(){
        this.products =[];
    }

    // Creo metodo que devuelve los productos
    getProducts(){
        return this.products;
    }

    // Metodo donde se crean los productos que luego son pusheados a getProducts
    addProduct(title, description, price, thumbnail, code, stock){
        
        // Controlo que no haya quedado ningun campo vacio
        if (!title || !description || !price || !thumbnail || !code || !stock){
            console.log("No se pueden dejar campos vacios.-")
            return;
        }
       
        // Busco duplicados, si existe uno aviso
        for (let i = 0; i < this.products.length; i++){
            if(this.products[i].code === code){
                console.log("Error!! - El codigo ya existe, ingresá otro nuevo.-");
                return;
            }
        }

        const product ={
            title,
            description,
            price,
            thumbnail,
            code,
            stock,
        }

        // Asigno el id
        product.id=this.#getID();

        // Hago el push del producto a products
        this.products.push(product);

    }
    
    // Creo metodo getID que es autoincrement
    #getID(){
        this.#id ++;
        return this.#id;
    }

}
const prod_man = new ProductManager();
prod_man.addProduct("Balde", "Balde plastico 15Lts.", 280,"", 7793322, 2)
prod_man.addProduct("Pincel", "Pincel fino n° 20", 25, "Sin Imagen", 7792532, 5)
prod_man.addProduct("Hacha", "Hacha de campo", 280, "Sin Imagen", 7792532, 2)
console.log(prod_man.getProducts())