<template>

    <div>

        <nav class="navbar">

            <div class="logo">
                <img src="@/assets/image/logo.png" alt="Logo" class="logo-img" />
            </div>

            <div class="menu">

                <router-link
                    to="/clientes"
                    active-class="activo"
                >
                    Clientes
                </router-link>

                <router-link
                    to="/productos"
                    active-class="activo"
                >
                    Productos
                </router-link>

                <router-link
                    to="/facturas"
                    active-class="activo"
                >
                    Facturas
                </router-link>

                <router-link
                    to="/detalle-factura"
                    active-class="activo"
                >
                    Detalle Factura
                </router-link>

            </div>

        </nav>

        <router-view />

    </div>

</template>

<script>

export default {

    name: 'App'

};

</script>

<style>

* {

    margin: 0;

    padding: 0;

    box-sizing: border-box;

}

body {

    background: #f5f7fb;

    font-family: Arial, Helvetica, sans-serif;

}

.navbar {

    display: flex;

    justify-content: space-between;

    align-items: center;

    padding: 18px 80px;

    background: #ffffff;

    box-shadow: 0 2px 12px rgba(0,0,0,.08);

    margin-bottom: 40px;

}

.logo {

    display: flex;

    align-items: center;

    gap: 12px;

    font-size: 24px;

    font-weight: bold;

    color: #2c3e50;

}

.logo-img {

    width: 200px;

    height: auto;

    object-fit: contain;

}

.menu {

    display: flex;

    gap: 30px;

}

.menu a {

    text-decoration: none;

    color: #555;

    font-size: 17px;

    font-weight: 500;

    transition: .25s;

    padding-bottom: 5px;

}

.menu a:hover {

    color: #42b983;

}

.activo {

    color: #42b983 !important;

    border-bottom: 3px solid #42b983;

}

</style>