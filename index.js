const header = document.querySelector('#header');
const menuLogo = document.createElement('div');
const imgLogoMenu = document.createElement('img');
imgLogoMenu.src = 'assets/JD_Sports_logo 1.png';
const menuHeader = document.createElement('nav');
menuHeader.classList.add('menuHeader');

const ulNav = document.createElement('ul');

const iconosMenu = document.createElement('div');
iconosMenu.classList.add('iconosMenu');

const logoFiltros = document.createElement('img');
logoFiltros.src = 'assets/filtros.png';

const logoCesta = document.createElement('img');
logoCesta.src = 'assets/cesta.png';

const logoUser = document.createElement('img');
logoUser.src = 'assets/User_avatar_.png';

const menuItemsHeader = [
  { name: 'Hombres', link: '#' },
  { name: 'Mujeres', link: '#' },
  { name: 'Niños', link: '#' },
  { name: 'Ofertas', link: '#' },
];

menuItemsHeader.forEach((item) => {
  const li = document.createElement('li');
  const aNav = document.createElement('a');
  aNav.textContent = item.name;
  aNav.href = item.link;
  ulNav.appendChild(li);
  li.appendChild(aNav);
});

const imgBanner = document.createElement('img');
imgBanner.src = 'assets/banner.png';
imgBanner.classList.add('imgBanner');

const listaZapatillas = [
  {
    imagen: 'assets/NikeAirMax1.png',
    marca: 'Nike Original',
    modelo: 'Air Max 1',
    precio: '120.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/NewBalanceNb9060.png',
    marca: 'New Balance',
    modelo: 'NB 9060',
    precio: '80.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/NikeOriginalRevolution.png',
    marca: 'Nike Original',
    modelo: 'Nike Revolution',
    precio: '90.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/AdidasOriginalForumBuckle.png',
    marca: 'Adidas Original',
    modelo: 'Forum Buckle',
    precio: '100.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/AdidasOriginalCampus.png',
    marca: 'Adidas Original',
    modelo: 'Campus',
    precio: '120.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/NewBalanceNB327.png',
    marca: 'New Balance',
    modelo: 'NB 327',
    precio: '120.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/NikeOriginalDunkLow.png',
    marca: 'Nike Original',
    modelo: 'Dunk Low',
    precio: '100.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/AdidasOriginalGazelle.png',
    marca: 'Adidas Original',
    modelo: 'Gazelle',
    precio: '90.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/nikeoriginalairmaxsc.png',
    marca: 'Nike Original',
    modelo: 'Air Max SC',
    precio: '150.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/Adidasoriginalhandball.png',
    marca: 'Adidas Original',
    modelo: 'Handball Spezial',
    precio: '120.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/nikeoriginalairforce.png',
    marca: 'Nike Original',
    modelo: 'Air Force',
    precio: '130.00€',
    comprar: '·',
  },
  {
    imagen: 'assets/newbalancenb90602.png',
    marca: 'New Balance',
    modelo: 'NB 9060',
    precio: '100.00€',
    comprar: '·',
  },
  {
    imagen: 'assets/NewbalanceNB480.png',
    marca: 'New Balance',
    modelo: 'NB 480',
    precio: '150.00€',
    comprar: '',
  },
  {
    imagen: 'assets/nikeoriginalfullforcelow.png',
    marca: 'Nike Original',
    modelo: 'Full Force Low',
    precio: '70.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/nikeoriginalairmaxsc2.png',
    marca: 'Nike Original',
    modelo: 'Air Max SC',
    precio: '160.00€',
    comprar: '#',
  },
  {
    imagen: 'assets/adidasoriginalhandballspezial2.png',
    marca: 'Adidas Original',
    modelo: 'Handball Spezial',
    precio: '140.00€',
    comprar: '#',
    value: '140.00€',
  },
];

const menuFilter = document.querySelector('#menu-filtros');

const filterLabelMarca = document.createElement('label');
filterLabelMarca.textContent.trim();

const filterSelectMarca = document.createElement('select');
filterSelectMarca.classList.add('filter-select-marca');
const allOptionMarca = document.createElement('option');
allOptionMarca.value = '';
allOptionMarca.textContent = 'Todas las marcas';
filterSelectMarca.appendChild(allOptionMarca);

const marcas = [...new Set(listaZapatillas.map((zapas) => zapas.marca))];
marcas.forEach((marca) => {
  const option = document.createElement('option');
  option.value = marca;
  option.textContent = marca;
  filterSelectMarca.appendChild(option);
});

const filterLabelPrecio = document.createElement('label');
filterLabelPrecio.textContent = '';
const filterSelectPrecio = document.createElement('select');
filterSelectPrecio.classList.add('filter-select-precio');
const allOptionPrecio = document.createElement('option');
allOptionPrecio.value = listaZapatillas.precio;

[
  { label: 'Todos los precios', value: 'mayor0' },
  { label: 'Menor a 100€', value: 'menor100' },
  { label: '100€ - 150€', value: '100-150' },
  { label: 'Mayor a 150€', value: 'mayor150.00' },
].forEach((rango) => {
  const option = document.createElement('option');
  option.value = rango.value;
  option.textContent = rango.label;
  filterSelectPrecio.appendChild(option);
});

const filterButton = document.createElement('button');
filterButton.classList.add('filter-button');
filterButton.textContent = 'Filtrar';

const clearButton = document.createElement('button');
clearButton.classList.add('clear-button');
clearButton.textContent = 'Limpiar';

menuFilter.appendChild(filterLabelMarca);
menuFilter.appendChild(filterSelectMarca);
menuFilter.appendChild(filterLabelPrecio);
menuFilter.appendChild(filterSelectPrecio);
menuFilter.appendChild(filterButton);
menuFilter.appendChild(clearButton);

const menuDesplegable = document.createElement('div');
menuDesplegable.classList.add('menu-desplegable');

menuDesplegable.appendChild(filterLabelMarca);
menuDesplegable.appendChild(filterSelectMarca);
menuDesplegable.appendChild(filterLabelPrecio);
menuDesplegable.appendChild(filterSelectPrecio);
menuDesplegable.appendChild(filterButton);
menuDesplegable.appendChild(clearButton);

menuFilter.appendChild(menuDesplegable);

menuDesplegable.style.display = 'none';

logoFiltros.addEventListener('click', () => {
  if (menuDesplegable.style.display === 'none') {
    menuDesplegable.style.display = 'flex';
    logoFiltros.src = 'assets/cambiar-color-menu.png';
  } else {
    menuDesplegable.style.display = 'none';
    logoFiltros.src = 'assets/filtros.png';
  }
});

const sectionCardsZapas = document.createElement('div');
sectionCardsZapas.style.display = 'grid';
sectionCardsZapas.style.gridTemplateColumns =
  'repeat(auto-fit, minmax(200px, 1fr))';
sectionCardsZapas.style.gap = '20px';
sectionCardsZapas.style.margin = '20px';

const sectionZapatillas = document.querySelector('#sectionZapatillas');

const mostrarProductosTienda = (productosTienda) => {
  sectionCardsZapas.innerHTML = '';
  productosTienda.forEach((producto) => {
    const cardZapas = document.createElement('div');
    cardZapas.classList.add('card-zapas');
    cardZapas.style.borderRadius = '10px';

    const imgZapas = document.createElement('img');
    imgZapas.classList.add('img-zapas');
    imgZapas.src = producto.imagen;
    imgZapas.style.width = '100%';

    const marcaZapas = document.createElement('h2');
    marcaZapas.classList.add('marca-zapas');
    marcaZapas.textContent = producto.marca;

    const modeloZapas = document.createElement('p');
    modeloZapas.classList.add('modelo-zapas');
    modeloZapas.textContent = producto.modelo;

    const precioZapas = document.createElement('p');
    precioZapas.classList.add('precio-zapas');
    precioZapas.textContent = producto.precio;

    const divModeloZapas = document.createElement('div');
    (divModeloZapas.textContent = producto.precio), producto.modelo;
    divModeloZapas.classList.add('div-modelo-zapas');

    const buttonComprar = document.createElement('button');
    buttonComprar.classList.add('button-comprar');
    buttonComprar.textContent = 'Comprar';
    buttonComprar.href = producto.comprar;

    cardZapas.appendChild(imgZapas);
    cardZapas.appendChild(marcaZapas);
    // cardZapas.appendChild(modeloZapas);
    // cardZapas.appendChild(precioZapas);
    divModeloZapas.appendChild(modeloZapas);
    // divModeloZapas.appendChild(precioZapas)
    cardZapas.appendChild(divModeloZapas);
    cardZapas.appendChild(buttonComprar);
    sectionCardsZapas.appendChild(cardZapas);
  });
};

mostrarProductosTienda(listaZapatillas);

filterButton.addEventListener('click', () => {
  const marcaSeleccionada = filterSelectMarca.value;
  const precioSeleccionado = filterSelectPrecio.value;

  let productosFiltrados = listaZapatillas;

  if (marcaSeleccionada) {
    productosFiltrados = productosFiltrados.filter(
      (producto) => producto.marca === marcaSeleccionada
    );
  }

  if (precioSeleccionado) {
    productosFiltrados = productosFiltrados.filter((producto) => {
      const precioTexto = producto.precio.trim();
      const precioNum = parseFloat(
        precioTexto.replace('€', '').replace(',', '.')
      );

      if (isNaN(precioNum)) return false;

      if (precioSeleccionado === 'mayor0') return precioNum > 0.0;
      if (precioSeleccionado === 'menor100') return precioNum < 100.0;
      if (precioSeleccionado === '100-150')
        return precioNum >= 100.0 && precioNum <= 150.0;
      if (precioSeleccionado === 'mayor150') return precioNum > 150.0;
      return false;
    });
  }

  mostrarProductosTienda(productosFiltrados);
});

clearButton.addEventListener('click', () => {
  filterSelectMarca.value = '';
  (filterSelectPrecio.value = 'mayor0'), 'menor100', '100-150', 'mayor150';
  mostrarProductosTienda(listaZapatillas);
});

menuHeader.appendChild(ulNav);
menuLogo.appendChild(imgLogoMenu);
iconosMenu.appendChild(logoFiltros);
iconosMenu.appendChild(logoCesta);
iconosMenu.appendChild(logoUser);
header.appendChild(menuLogo);
header.appendChild(menuHeader);
header.appendChild(iconosMenu);
header.insertAdjacentElement('afterend', imgBanner);
sectionZapatillas.appendChild(sectionCardsZapas);

const footer = document.querySelector('#footer');

const footerContainer = document.createElement('div');
footerContainer.classList.add('footer-container');

const linksCompraJd = document.createElement('div');
linksCompraJd.classList.add('links-compra-jd');
const linksTitleCompraJd = document.createElement('h4');
linksTitleCompraJd.textContent = 'Compra con JD';
linksCompraJd.appendChild(linksTitleCompraJd);

const linksListCompraJd = document.createElement('ul');

const linksDeCompraJd = [
  { text: 'Guia de tallas', href: '#' },
  { text: 'Buscador de tallas', href: '#' },
  { text: 'Descuento estudiantes', href: '#' },
  { text: 'Calendario lanzamientos', href: '#' },
  { text: 'Inscribite a JDX', href: '#' },
  { text: 'JD Blog', href: '#' },
];

linksDeCompraJd.forEach((link) => {
  const listCompraJd = document.createElement('li');
  const anchorCompraJd = document.createElement('a');

  anchorCompraJd.textContent = link.text;
  anchorCompraJd.href = link.href;

  listCompraJd.appendChild(anchorCompraJd);
  linksListCompraJd.appendChild(listCompraJd);
});

linksCompraJd.appendChild(linksListCompraJd);

const linksAtencionCliente = document.createElement('div');
const linksTitleAtencionCliente = document.createElement('h4');
linksTitleAtencionCliente.textContent = 'Atención al cliente';
linksAtencionCliente.appendChild(linksTitleAtencionCliente);

const ulAtencionCliente = document.createElement('ul');

const linksDeAtencionCliente = [
  { text: 'Preguntas frecuentes', href: '#' },
  { text: 'Envíos y devoluciones', href: '#' },
  { text: 'Seguimiento de envío', href: '#' },
  { text: 'Contecto', href: '#' },
];

linksDeAtencionCliente.forEach((linkAtencion) => {
  const liAtencionCliente = document.createElement('li');
  const anchorAtencionCliente = document.createElement('a');
  anchorAtencionCliente.textContent = linkAtencion.text;
  anchorAtencionCliente.href = linkAtencion.href;

  liAtencionCliente.appendChild(anchorAtencionCliente);
  ulAtencionCliente.appendChild(liAtencionCliente);
});

linksAtencionCliente.appendChild(ulAtencionCliente);

const linksAvisoLegal = document.createElement('div');
const linksTitleAvisoLegal = document.createElement('h4');
linksTitleAvisoLegal.textContent = 'Atención al cliente';
linksAvisoLegal.appendChild(linksTitleAvisoLegal);

const ulAvisoLegal = document.createElement('ul');

const linksDeAvisoLegal = [
  { text: 'Términos y condiciones', href: '#' },
  { text: 'Promociones y condiciones', href: '#' },
  { text: 'Política de privacidad', href: '#' },
  { text: 'Política de Cookies', href: '#' },
  { text: 'Ajustes de Cookies', href: '#' },
  { text: 'Accesibilidad', href: '#' },
];

linksDeAvisoLegal.forEach((linkAviso) => {
  const liAvisoLegal = document.createElement('li');
  const anchorAvisoLegal = document.createElement('a');
  anchorAvisoLegal.textContent = linkAviso.text;
  anchorAvisoLegal.href = linkAviso.href;

  liAvisoLegal.appendChild(anchorAvisoLegal);
  ulAvisoLegal.appendChild(liAvisoLegal);
});

linksAvisoLegal.appendChild(ulAvisoLegal);

footerContainer.appendChild(linksCompraJd);
footerContainer.appendChild(linksAtencionCliente);
footerContainer.appendChild(linksAvisoLegal);
footer.appendChild(footerContainer);
