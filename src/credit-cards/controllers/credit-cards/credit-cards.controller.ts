import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  InternalServerErrorException,
  NotFoundException,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { CreateCreditCardDto } from 'src/credit-cards/dtos/createCreditCard.dto';
import { UpdateCreditCardDto } from 'src/credit-cards/dtos/updateCreditCard.dto';
import { CreditCardsService } from 'src/credit-cards/services/credit-cards/credit-cards.service';

@Controller('credit-cards')
export class CreditCardsController {
  constructor(private readonly creditCardsService: CreditCardsService) {}

  @Get()
  async getCreditCards() {
    try {
      const creditCards = await this.creditCardsService.getCreditCards();
      return creditCards;
    } catch (e) {
      console.log(e);
    }
  }

  @Get(':id')
  async getCreditCard(@Param('id', ParseIntPipe) id: number) {
    try {
      const creditCard = await this.creditCardsService.getCreditCard(id);
      if (!creditCard) {
        throw new NotFoundException('No credit card found');
      }
      return creditCard;
    } catch (e) {
      console.log(e)
    }
  }

  @Post()
  async createCreditCard(@Body() creditCardInfo: CreateCreditCardDto) {
    try {
      const newCreditCard = await this.creditCardsService.createCreditCard(
        creditCardInfo,
      );
      return newCreditCard;
    } catch (e) {
      console.log(e);
    }
  }

  @Patch(':id')
  async updateCreditCard(
    @Body() creditCardInfo: UpdateCreditCardDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    try {
      const updatedCreditCard = await this.creditCardsService.updateCreditCard(id, creditCardInfo);
      if(!updatedCreditCard){
        throw new HttpException("Update credit card failed!", HttpStatus.NOT_FOUND)
      }
      return updatedCreditCard;
    } catch (e) {
      console.log(e);
    }
  }

  @Delete(':id')
  deleteCreditCard(@Param('id', ParseIntPipe) id: number) {
    try {
      const deletedUser = this.creditCardsService.deleteCreditCard(id);
      return deletedUser;
    } catch (e) {
      console.log(e);
    }
  }
}
