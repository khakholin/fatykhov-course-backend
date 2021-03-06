import { Body, Controller, Post, Get, HttpException, HttpStatus, UseGuards, Request, Param, Res, Header } from '@nestjs/common';

import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { join } from 'path';
import { ITestData, IGetTestData, IUpdateTest, IRemoveCourseTests, ICheckTest } from './testing.types';
import { TestingService } from './testing.service';

@Controller('testing')
export class TestingController {
    constructor(
        private testingService: TestingService,
    ) { }

    @UseGuards(JwtAuthGuard)
    @Get('list')
    async getAllTests(@Request() req) {
        return this.testingService.getAllTests();
    }

    @UseGuards(JwtAuthGuard)
    @Post('update')
    async updateTest(@Body() body: IUpdateTest) {
        return this.testingService.updateTest(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('data-watch')
    async getTestWatch(@Body() body: IGetTestData) {
        return this.testingService.getTestWatch(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('available-tests')
    async getAvailableLecturesTests(@Body() body: { courseName: string }) {
        return this.testingService.getAvailableLecturesTests(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('data-edit')
    async getTestEdit(@Body() body: IGetTestData) {
        return this.testingService.getTestEdit(body);
    }

    @UseGuards(JwtAuthGuard)
    @Post('check')
    async checkTest(@Body() body: ICheckTest) {
        return this.testingService.checkTest(body);
    }
}
