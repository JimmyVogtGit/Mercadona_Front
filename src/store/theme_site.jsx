const themeImg = [
  {
    id: 1,
    catImg: "HOMEPAGE",
    name: "retail",
    url: "src/assets/img/retail.jpg",
  },
  {
    id: 2,
    catImg: "HOMEPAGE",
    name: "gadgets",
    url: "src/assets/img/gadgets.jpg",
  },
  {
    id: 3,
    catImg: "AUTO",
    name: "auto1",
    url: "src/assets/img/auto/auto1.jpg",
  },
  { id: 4, catImg: "BAG", name: "bag1", url: "src/assets/img/bag/bag1.jpg" },
  { id: 5, catImg: "BAG", name: "bag2", url: "src/assets/img/bag/bag2.jpg" },
  { id: 6, catImg: "BAG", name: "bag3", url: "src/assets/img/bag/bag3.jpg" },
  {
    id: 7,
    catImg: "ELECTRONIC",
    name: "elec1",
    url: "src/assets/img/electronic/elec1.jpg",
  },
  {
    id: 8,
    catImg: "ELECTRONIC",
    name: "elec2",
    url: "src/assets/img/electronic/elec2.jpg",
  },
  { id: 9, catImg: "MAN", name: "man1", url: "src/assets/img/man/man1.jpg" },
  { id: 10, catImg: "MAN", name: "man2", url: "src/assets/img/man/man2.jpg" },
  { id: 11, catImg: "MAN", name: "man3", url: "src/assets/img/man/man3.jpg" },
  {
    id: 12,
    catImg: "WOMAN",
    name: "woman2",
    url: "src/assets/img/woman/woman2.jpg",
  },
  {
    id: 13,
    catImg: "WOMAN",
    name: "woman2",
    url: "src/assets/img/woman/woman2.jpg",
  },
  {
    id: 14,
    catImg: "WOMAN",
    name: "woman3",
    url: "src/assets/img/woman/woman3.jpg",
  },
  {
    id: 15,
    catImg: "MOTO",
    name: "moto1",
    url: "src/assets/img/moto/moto1.jpg",
  },
  {
    id: 16,
    catImg: "MOTO",
    name: "moto2",
    url: "src/assets/img/moto/moto2.jpg",
  },
  {
    id: 17,
    catImg: "MOTO",
    name: "moto3",
    url: "src/assets/img/moto/moto3.jpg",
  },
  {
    id: 18,
    catImg: "SHOE",
    name: "shoe1",
    url: "src/assets/img/shoe/shoe1.jpg",
  },
  {
    id: 19,
    catImg: "SHOE",
    name: "shoe2",
    url: "src/assets/img/shoe/shoe2.jpg",
  },
  {
    id: 20,
    catImg: "SHOE",
    name: "shoe3",
    url: "src/assets/img/shoe/shoe3.jpg",
  },
  { id: 21, catImg: "TOY", name: "toy1", url: "src/assets/img/toy/toy1.jpg" },
  { id: 22, catImg: "TOY", name: "toy2", url: "src/assets/img/toy/toy2.jpg" },
  { id: 23, catImg: "TOY", name: "toy3", url: "src/assets/img/toy/toy3.jpg" },
];

const themeText = {
  fr: {
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
  },
};

export default {
  themeImg,
  themeText,
  themeButton,
  themeForm,
};
