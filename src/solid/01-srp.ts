(() => {

    interface Product { 
        id:   number;
        name: string;
    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {
        private ProductService: ProductService;
        private mailer: Mailer;
        constructor(productService: ProductService, mailer: Mailer) {
            this.ProductService = productService;
            this.mailer = mailer;
        }
        loadProduct( id: number ) {
            this.ProductService.getProduct( id );
        }
        saveProduct( product: Product ) {
            this.ProductService.saveProduct( product );
        }
        notifyClients() {
            this.mailer.sendMail(['paulo@hotmail.es'], 'to-clients');
        }
    }

    class ProductService {
        // private httpAdapter: Object;
        getProduct( id: number ) {
            console.log('Producto: ',{ id, name: 'OLED Tv' });
        }
        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }
    }
  
    class CartBloc {
        private itemsInCart: Object[] = []
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }
    }

    class Mailer {
        private masterEmail: string = 'pcgalarza@espe.edu.ec';
        sendMail(emailList: string[], template: 'to-clients' | 'to-admins' ) {
            console.log('Enviando correo a los clientes',emailList , template);
        }
    }

    const productService = new ProductService();
    const mailer        = new Mailer();

    const productBloc = new ProductBloc(productService, mailer);
    const cartBloc    = new CartBloc();
    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBloc.onAddToCart(10);
})();