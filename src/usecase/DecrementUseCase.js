// MIT © 2017 azu
"use strict";
import { UseCase } from "almin";

export class DecrementUseCase extends UseCase {
    execute() {
        this.dispatch({
            type: "Decrement"
        });
    }
}