const themeImg = [
  {
    id: 1,
    catName: "homepage",
    name: "retail",
    url: "src/assets/img/retail.jpg",
  },
  {
    id: 2,
    catName: "homepage",
    name: "gadgets",
    url: "src/assets/img/gadgets.jpg",
  },
  {
    id: 3,
    catName: "Autos",
    name: "auto1",
    url: "src/assets/img/auto/auto1.jpg",
  },
  { id: 4, catName: "Sacs", name: "bag1", url: "src/assets/img/bag/bag1.jpg" },
  { id: 5, catName: "Sacs", name: "bag2", url: "src/assets/img/bag/bag2.jpg" },
  { id: 6, catName: "Sacs", name: "bag3", url: "src/assets/img/bag/bag3.jpg" },
  {
    id: 7,
    catName: "Electronique",
    name: "elec1",
    url: "src/assets/img/electronic/elec1.jpg",
  },
  {
    id: 8,
    catName: "Electronique",
    name: "elec2",
    url: "src/assets/img/electronic/elec2.jpg",
  },
  {
    id: 9,
    catName: "Mode homme",
    name: "man1",
    url: "src/assets/img/man/man1.jpg",
  },
  {
    id: 10,
    catName: "Mode homme",
    name: "man2",
    url: "src/assets/img/man/man2.jpg",
  },
  {
    id: 11,
    catName: "Mode homme",
    name: "man3",
    url: "src/assets/img/man/man3.jpg",
  },
  {
    id: 12,
    catName: "Mode femme",
    name: "woman2",
    url: "src/assets/img/woman/woman2.jpg",
  },
  {
    id: 13,
    catName: "Mode femme",
    name: "woman2",
    url: "src/assets/img/woman/woman2.jpg",
  },
  {
    id: 14,
    catName: "Mode femme",
    name: "woman3",
    url: "src/assets/img/woman/woman3.jpg",
  },
  {
    id: 15,
    catName: "Motos",
    name: "moto1",
    url: "src/assets/img/moto/moto1.jpg",
  },
  {
    id: 16,
    catName: "Motos",
    name: "moto2",
    url: "src/assets/img/moto/moto2.jpg",
  },
  {
    id: 17,
    catName: "Motos",
    name: "moto3",
    url: "src/assets/img/moto/moto3.jpg",
  },
  {
    id: 18,
    catName: "Chaussures",
    name: "shoe1",
    url: "src/assets/img/shoe/shoe1.jpg",
  },
  {
    id: 19,
    catName: "Chaussures",
    name: "shoe2",
    url: "src/assets/img/shoe/shoe2.jpg",
  },
  {
    id: 20,
    catName: "Chaussures",
    name: "shoe3",
    url: "src/assets/img/shoe/shoe3.jpg",
  },
  {
    id: 21,
    catName: "Jouets enfants",
    name: "toy1",
    url: "src/assets/img/toy/toy1.jpg",
  },
  {
    id: 22,
    catName: "Jouets enfants",
    name: "toy2",
    url: "src/assets/img/toy/toy2.jpg",
  },
  {
    id: 23,
    catName: "Jouets enfants",
    name: "toy3",
    url: "src/assets/img/toy/toy3.jpg",
  },
];

const themeText = {
  fr: {
    nothing: "Accès interdit !!",
    isPromo: "En promotion",
    noProduct: "Aucun produit trouvé",
    welcomeAdmin: "Bienvenue",
    catalog: "Notre catalogue de Produit",
    welcome: "Bienvenue sur le site de Mercadona Retail",
    titleSectionDescribe: "The Best place",
    titleSectionGadget: "Des gadgets en tout genre",
    titleDescribe:
      "Découvrez le paradis du shopping en ligne sur notre site de retail ultime ! Nous vous offrons une expérience d'achat inégalée avec une sélection incroyable de produits de haute qualité. Explorez notre vaste gamme de catégories, des vêtements tendance aux gadgets technologiques dernier cri, en passant par les accessoires de maison élégants. Notre site regorge des marques les plus prisées, garantissant des produits exceptionnels pour répondre à tous vos besoins et envies. ",
    titleGadget:
      "Découvrez la magie des gadgets dans notre vente exceptionnelle ! Êtes-vous prêt à plonger dans un monde rempli de technologie innovante et de gadgets futuristes ? Ne cherchez plus, car notre événement de vente de gadgets est là pour vous éblouir. ",
  },
  es: {
    nothing: "¡No hay acceso!",
    isPromo: "En promoción",
    noProduct: "No se han encontrado productos",
    welcomeAdmin: "Bienvenido",
    catalog: "Nuestro catálogo de productos",
    welcome: "Bienvenido a Mercadona Retail",
    titleSectionDescribe: "The Best place",
    titleSectionGadget: "Todo tipo de artilugios",
    titleDescribe:
      "Descubra el paraíso de las compras en línea en nuestro sitio minorista por excelencia. Le ofrecemos una experiencia de compra inigualable con una increíble selección de productos de alta calidad. Explore nuestra amplia gama de categorías, desde ropa de moda hasta los últimos gadgets tecnológicos y elegantes accesorios para el hogar. Nuestro sitio está repleto de las marcas más populares, lo que garantiza productos excepcionales para satisfacer todas sus necesidades y deseos.",
    titleGadget:
      "¡Descubre la magia de los gadgets en nuestra venta especial! ¿Estás listo para sumergirte en un mundo de tecnología innovadora y gadgets futuristas? No busques más, porque nuestro evento de venta de gadgets está aquí para deslumbrarte.",
  },
};

const themeButton = {
  fr: {
    catalog: "Catalogue",
    admin: "Espace admin",
    disconnect: "Déconnexion",
    addPromo: "Ajouter promo",
    createProduct: "Creer un produit",
    createPromo: "Creer une promo",
  },
  es: {
    catalog: "Catálogo",
    admin: "Área de administración",
    disconnect: "Desconexión",
    addPromo: "Añadir promoción",
    createProduct: "Crear un producto",
    createPromo: "creación de la promoción",
  },
};

const themeForm = {
  fr: {
    startDate: "Date début",
    endDate: "Date fin",
    createProductTitle: "Création d'un produit",
    createPromoTitle: "Création d'une promotion",
    percentage: "Pourcentage",
    wording: "Libellé",
    describe: "Description",
    price: "Prix",
    category: "Catégory",
    password: "Mot de passe",
    userName: "Nom d'utilisateur",
    submit: "soumettre",
    connection: "Merci de vous connecter",
    email: "Email",
    user: "Utilisateur",
    registerWelcome: "Enregistrer des utilisateurs",
    registerList: "Liste des utilisateurs inscrits",
  },
  es: {
    startDate: "Fecha de inicio",
    endDate: "Fecha final",
    createProductTitle: "Crear un producto",
    createPromoTitle: "Crear una promoción",
    percentage: "Porcentaje",
    wording: "Redacción",
    describe: "Descripción",
    price: "Premios",
    category: "Categoría",
    userName: "Nombre de usuario",
    password: "Contraseña",
    submit: "enviar",
    connection: "Conéctese",
    email: "correo electrónico",
    user: "Usuario",
    registerWelcome: "Registrar usuarios aquí",
    registerList: "Lista de usuarios registrados",
  },
};

export default {
  themeImg,
  themeText,
  themeButton,
  themeForm,
};
