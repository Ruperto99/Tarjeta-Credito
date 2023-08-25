import { creditoNombreFile } from "../pipes/nombre-tarjeta";
import { CreditoNumerofiles } from "../pipes/numero-tarjeta";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TarjetaComponent } from "./tarjeta/tarjeta.component";

@NgModule({ 
    declarations:[
        TarjetaComponent,
        creditoNombreFile,
        CreditoNumerofiles
    ],
    imports:[CommonModule,
    FormsModule
    ],
    exports:[
        TarjetaComponent,
    ]
})
export class cardModelo{}