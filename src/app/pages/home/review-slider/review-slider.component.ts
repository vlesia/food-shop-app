import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-review-slider',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review-slider.component.html',
  styleUrl: './review-slider.component.scss',
})
export class ReviewSliderComponent {
  public customerReviews = [
    {
      review:
        'I had an incredible experience shopping here! The variety of fresh produce is unmatched, and everything was delivered in perfect condition. I especially loved the juicy oranges and crisp lettuce. Highly recommend!',
      firstName: 'Emma',
      lastName: 'Johnson',
    },
    {
      review:
        'The delivery was on time, but the bread I received wasn’t as fresh as I had hoped. Other than that, the overall service was good, and the fruits were fresh. I’ll give it another try.',
      firstName: 'Michael',
      lastName: 'Brown',
    },
    {
      review:
        'Excellent service and amazing quality! I ordered seafood, and the salmon was incredibly fresh and tasty. The packaging was also top-notch. I’m already planning my next order.',
      firstName: 'Sophia',
      lastName: 'Davis',
    },
    {
      review:
        'The meat selection was impressive. I bought some lamb chops, and they were perfect for grilling! The cuts were clean and fresh, and the price was reasonable. Great value for money.',
      firstName: 'James',
      lastName: 'Wilson',
    },
    {
      review:
        'I was a bit disappointed with the dairy products. The cheese I ordered arrived in good condition, but the milk had already expired. Customer service was responsive and refunded me quickly, so I appreciate that.',
      firstName: 'Olivia',
      lastName: 'Martinez',
    },
    {
      review:
        'This store has become my go-to for organic food! Everything from fruits and vegetables to snacks is fresh and tastes amazing. The prices are fair for the quality you get.',
      firstName: 'Lucas',
      lastName: 'Garcia',
    },
    {
      review:
        'Great experience overall. The website is easy to navigate, and I found everything I needed. My only complaint is the delivery fee for small orders—it’s a bit high.',
      firstName: 'Isabella',
      lastName: 'Lopez',
    },
    {
      review:
        'The snacks and beverages section is wonderful! I ordered some imported teas and gourmet chocolates, and they were fantastic. The packaging was also elegant.',
      firstName: 'Alexander',
      lastName: 'Taylor',
    },
  ];

  public currentIndex = 0;
  public visibleSlides = 3;

  get currentTranslateX(): number {
    return -this.currentIndex * (100 / this.visibleSlides);
  }

  public moveLeft(): void {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    }
  }

  public moveRight(): void {
    if (this.currentIndex < this.customerReviews.length - this.visibleSlides) {
      this.currentIndex++;
    }
  }
}
