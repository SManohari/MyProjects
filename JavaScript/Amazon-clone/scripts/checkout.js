import { renderOrderSummary } from "./checkout/OrderSummary.js";
import { renderPaymentSummary } from "./checkout/PaymentSummary.js";
import { loadProductsFetch} from  "../data/products.js";
import {loadCart} from '../data/cart.js'; 

/********************Async-Await********************/

 export async function loadPage(){

    await loadProductsFetch();

    await new Promise((resolve)=>{
      loadCart(()=>{
        resolve();
      })
    });

    renderOrderSummary();
    renderPaymentSummary();

}

loadPage();

/************callback call********************
loadProducts(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})*/

/*****************Promises**************************
  new Promise((resolve)=>{
     loadProducts(()=>{
        resolve();
      });
    })
    .then(()=>{
      return new Promise((resolve)=>{
        loadCart(()=>{
          resolve();
        });
      })
    })
    .then(()=>{
        renderOrderSummary();
        renderPaymentSummary();
    })
*/

  /********************Promises.all********************

    Promise.all([
      loadProductsFetch(),

      new Promise((resolve)=>{
        loadCart(()=>{
          resolve();
        })
      })
      
    ]).then(()=>{
      renderOrderSummary();
      renderPaymentSummary();
    })
  */

