"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const sendEmail_1 = require("../email/sendEmail");
const welcome_service_1 = require("./welcome.service");
let WelcomeController = class WelcomeController {
    constructor(welcomeService) {
        this.welcomeService = welcomeService;
    }
    async recoveryPassword(body) {
        return this.welcomeService.registration(body);
    }
};
__decorate([
    common_1.Post('registration'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], WelcomeController.prototype, "recoveryPassword", null);
WelcomeController = __decorate([
    common_1.Controller('welcome'),
    __metadata("design:paramtypes", [welcome_service_1.WelcomeService])
], WelcomeController);
exports.WelcomeController = WelcomeController;
//# sourceMappingURL=welcome.controller.js.map