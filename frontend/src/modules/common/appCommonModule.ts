import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Page } from "../common/components/page";
import { FormButton } from "../common/components/formButton";
import { FormInput } from "../common/components/formInput";
import { HorizalForm } from "../common/components/horizalForm";
import { FormPrimaryButton } from "../common/components/formPrimaryButton";

@NgModule({
    imports: [FormsModule],
    declarations: [Page, FormButton, FormInput, FormPrimaryButton, HorizalForm],
    exports: [Page, FormButton, FormInput, FormPrimaryButton, HorizalForm],
})

export class AppCommonModule {

}