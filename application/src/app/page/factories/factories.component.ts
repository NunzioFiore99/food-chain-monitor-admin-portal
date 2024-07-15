import { Component } from '@angular/core';

@Component({
  selector: 'app-factories',
  templateUrl: './factories.component.html',
  styleUrl: './factories.component.scss',
})
export class FactoriesComponent {
  factory1 = {
    name: 'GreenHarvest SPA',
    address: '42 Rossi Street, Bari, BA 70124, Italy',
    employeeCount: 23,
    ceo: 'Fiore Nunzio',
    foundedDate: '05/08/2021',
    description:
      'Our factory plays a crucial role in the supply chain of the food industry, specifically focused on sourcing raw materials for pasta flour production. Nestled in the heart of agricultural regions known for their fertile soils and optimal climate conditions, we meticulously select and gather the finest grains required for milling into high-quality pasta flour. Collaborating closely with local farmers who adhere to sustainable farming practices, we ensure a consistent and reliable supply of premium raw materials. Through our commitment to quality assurance and technological innovation, we contribute to the creation of wholesome pasta products that meet the highest standards of taste, texture, and nutritional value.',
    img: '../../../../../assets/img/factory1.jpg',
    simCount: 4,
    smartSensorCount: 25,
    sensorConnectionQuality: 'HIGH',
    sensorBrokenCount: 0,
  };

  factory2 = {
    name: 'Food Company SPA',
    address: '3 Verdi Street, Modugno, BA 70132, Italy',
    employeeCount: 32,
    ceo: 'Fiore Nunzio',
    foundedDate: '10/09/2021',
    description:
      'Our factory is dedicated to crafting exceptional pasta within the food supply chain. Located amidst picturesque fields where grains flourish, we transform meticulously sourced flour into a variety of pasta shapes beloved worldwide. With a passion for tradition and innovation, our skilled artisans blend centuries-old techniques with modern technology to ensure every strand of pasta embodies perfection. Committed to sustainability, we prioritize eco-friendly practices throughout our production process. From durum wheat to delectable dishes, we take pride in delivering pasta that delights palates and nourishes bodies, enriching the global culinary landscape one plate at a time.',
    img: '../../../../../assets/img/factory2.jpg',
    simCount: 5,
    smartSensorCount: 32,
    sensorConnectionQuality: 'MEDIUM',
    sensorBrokenCount: 2,
  };

  factory3 = {
    name: 'Box Enterprises SRL',
    address: '25 Bosco Street, Mola di Bari, BA 70140, Italy',
    employeeCount: 16,
    ceo: 'Fiore Nunzio',
    foundedDate: '21/10/2021',
    description:
      'Our factory specializes in packaging and storing freshly produced pasta within the food supply chain. Situated in a strategic location near our pasta production facility, our state-of-the-art packaging lines meticulously wrap each variety of pasta to preserve its quality and freshness. With a focus on efficiency and sustainability, we employ advanced technologies to ensure precise weighing, sealing, and labeling of every package. Our expansive warehouse facilities provide ample storage capacity, maintaining optimal conditions to safeguard the pasta’s flavor and texture until it reaches discerning customers worldwide. Committed to quality assurance and reliability, we play a pivotal role in delivering premium pasta products that meet the highest standards of taste and culinary excellence.',
    img: '../../../../../assets/img/factory3.jpg',
    simCount: 2,
    smartSensorCount: 19,
    sensorConnectionQuality: 'HIGH',
    sensorBrokenCount: 0,
  };
}
