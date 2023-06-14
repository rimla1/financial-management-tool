import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
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
  getCreditCard(@Param('id', ParseIntPipe) id: number) {
    try {
      const creditCard = this.creditCardsService.getCreditCard(id);
      if(!creditCard){
        throw new HttpException("No credit card found", HttpStatus.NOT_FOUND)
      }
      return creditCard;
    } catch (e) {
      console.log(e);
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
  updateCreditCard(
    @Body() creditCardInfo: UpdateCreditCardDto,
    @Param('id', ParseIntPipe) id: number,
  ) {
    try {
      this.creditCardsService.updateCreditCard(id, creditCardInfo);
      return 'Updated!';
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
