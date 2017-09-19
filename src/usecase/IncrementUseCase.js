// MIT © 2017 azu
"use strict";
import { UseCase } from "almin";

export class IncrementUseCase extends UseCase {
    execute() {
        this.dispatch({
            type: "Increment"
        });
    }
}