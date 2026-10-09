import { paginas } from "./templates.js";
import { iniciarNavegacao } from "./navigation.js";
import { iniciarValidacao } from "./validation.js";
import { iniciarStorage } from "./storage.js";

iniciarNavegacao(paginas);
iniciarValidacao();
iniciarStorage();