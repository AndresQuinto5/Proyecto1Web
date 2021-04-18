import React, { Component } from 'react';
import Header from './components/Header.js';
import './StartApp.css';
import Item from './components/Item.js'
import Accesories from './assets/Desktop-Accessories.jpg'
import Model3 from './assets/Desktop-Model3.jpg'
import ModelX from './assets/modelX.jpg'
import ModelY from './assets/Desktop-ModelY.jpg'
import SolarPanels from './assets/Desktop-SolarPanels.jpg'
import SolarRoof from './assets/solarRoofs.jpg'

function StartApp() {
    return (
    <div className="App">
        <Header />
        <div className = "AppitemsContainer">
            <Item
                title='ModelS'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {Model3}
                LeftBtnText = 'Order now'
                LeftBtnLink = ''
                RightBtnText = 'Info'
                RightBtnLink = ''
                twoButtons = 'true'

            />
            <Item
                title='ModelY'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {ModelY}
                LeftBtnText = 'Order now'
                LeftBtnLink = ''
                RightBtnText = 'Info'
                RightBtnLink = ''
                twoButtons = 'true'

            />
            <Item
                title='ModelS'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {Model3}
                LeftBtnText = 'Order now'
                LeftBtnLink = ''
                RightBtnText = 'Info'
                RightBtnLink = ''
                twoButtons = 'true'

            />
            <Item
                title='ModelX'
                desc = 'Order Online for Touchless Delivery'
                descLink = ''
                backgroundImg = {ModelX}
                LeftBtnText = 'Order now'
                LeftBtnLink = ''
                RightBtnText = 'Info'
                RightBtnLink = ''
                twoButtons = 'true'

            />
            <Item
                title='Lowest Cost Solar Panels in America'
                desc = 'Money-back guarantee'
                descLink = ''
                backgroundImg = {SolarPanels}
                LeftBtnText = 'Order now'
                LeftBtnLink = ''
                RightBtnText = 'Info'
                RightBtnLink = ''
                twoButtons = 'true'

            />
            <Item
                title='Solar for New Roofs'
                desc = 'Solar Roof Costs Less Than a New Roof Plus Solar Panels'
                descLink = ''
                backgroundImg = {SolarRoof}
                LeftBtnText = 'Order now'
                LeftBtnLink = ''
                RightBtnText = 'Info'
                RightBtnLink = ''
                twoButtons = 'true'

            />
            <Item
                title='Accessories'
                desc = ''
                descLink = ''
                backgroundImg = {Accesories}
                LeftBtnText = 'Order now'
                LeftBtnLink = ''
                first
            />
        </div>
    </div>
    );
}

export default StartApp;