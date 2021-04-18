import React from 'react'
/* Debe ser declarado con B mayuscula por que al jalarlo, da clavo por el button predeterminado */
import Button from './button'
import './Item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
/*Creamos los items que se despliegan en la pagina*/
const Item = ({title, desc, descLink,backgroundImg,LeftBtnText,LeftBtnLink, RightBtnText, RightBtnLink, twoButtons, first    }) => {
    return (
        <div className = 'item' style= {{
            /*Jquery*/
            backgroundImage: `url(${backgroundImg})`
        }}>
            <div className = "contenedorItem_">
                <div className = "Textoitem_">
                    <p>{title}</p>
                    <div className = "DescripcionIt">
                        <p>{desc}</p>  
                    </div>
                </div>
                <div className = "LowerItem">
                    
                    <div className = "ItemButtons">
                        
                        <Button imp = 'primary' text={LeftBtnText} link = {LeftBtnLink}/>
                        {twoButtons && (
                            <Button imp = 'secondary'text = {RightBtnText} link = {RightBtnLink} />
                        )}
                    </div>
                    {first && (
                        /*en esta parte queremos mostrar los items expandidos, es por eso que usamos la libreria de expandir de @materialUI
                        link de ref: https://material-ui.com/es/components/material-icons/
                        npm add @material-ui/core*/
                        <div className = "Expander_item">
                            <ExpandMoreIcon />
                        </div> 
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item