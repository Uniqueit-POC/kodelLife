
tailwind.config = {
  theme: {
    extend: {
      colors: {
        'brand-dark': '#0A2342',
        'brand-blue': '#1B55C5',
        'brand-yellow': '#F5B800',
        'brand-gray': '#555555',
        'brand-lightGray': '#717171',
        'inactive-dot': '#FFFFFF4D',
        'light-blue-text': '#E8EEF9',
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #050F1F 0%, #0A2342 40%, #0D3B5E 100%)',
        'stats-gradient': 'linear-gradient(90deg, #0A2342 0%, #0D3B5E 50%, #1B55C5 100%)',
        'card-gradient': 'linear-gradient(90deg, #1B55C5 0%, #1445A0 100%)',
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
    }
  }
}
   
// home page nav code start here
  const menuBtn = document.getElementById('mobile-menu-button');
  const mobileMenu = document.getElementById('mobile-menu');
  const menuIcon = menuBtn.querySelector('i');

  // Toggle Mobile Menu
  menuBtn.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.contains('translate-x-0');
    if (isOpen) {
      mobileMenu.classList.remove('translate-x-0');
      mobileMenu.classList.add('translate-x-full');
      menuIcon.classList.replace('fa-xmark', 'fa-bars');
    } else {
      mobileMenu.classList.add('translate-x-0');
      mobileMenu.classList.remove('translate-x-full');
      menuIcon.classList.replace('fa-bars', 'fa-xmark');
    }
  });

  // Toggle Mobile Dropdown
  function toggleMobileDropdown() {
    const dropdown = document.getElementById('mobile-dropdown');
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('flex');
  }
// home page nav code end here

  // home page here banner slider start here
        const track = document.getElementById('track');
        const dots = document.querySelectorAll('.dot');
        const currentIndexSpan = document.getElementById('current-index');
        const nextBtn = document.getElementById('next');
        const prevBtn = document.getElementById('prev');
        const totalSlides = 3;
        let index = 0;
        let autoSlideTimer;

        if (track && currentIndexSpan && nextBtn && prevBtn && dots.length) {
            function updateSlider() {
                // Move slide track
                track.style.transform = `translateX(-${index * 100}%)`;

                // Update counter (format 01, 02, etc)
                currentIndexSpan.innerText = (index + 1).toString().padStart(2, '0');

                // Update dots
                dots.forEach((dot, i) => {
                    if (i === index) {
                        dot.classList.add('active');
                    } else {
                        dot.classList.remove('active');
                    }
                });
            }

            function startAutoSlide() {
                clearInterval(autoSlideTimer);
                autoSlideTimer = setInterval(() => {
                    index = (index + 1) % totalSlides;
                    updateSlider();
                }, 5000);
            }

            nextBtn.addEventListener('click', () => {
                index = (index + 1) % totalSlides;
                updateSlider();
                startAutoSlide();
            });

            prevBtn.addEventListener('click', () => {
                index = (index - 1 + totalSlides) % totalSlides;
                updateSlider();
                startAutoSlide();
            });

            // Allow clicking dots to navigate
            dots.forEach((dot, i) => {
                dot.addEventListener('click', () => {
                    index = i;
                    updateSlider();
                    startAutoSlide();
                });
            });

            startAutoSlide();
        }
  // home page here banner slider end here

//   home page faq seciton start here
document.querySelectorAll('.faq-item button').forEach(button => {
        button.addEventListener('click', () => {
            const currentItem = button.parentElement;
            const content = currentItem.querySelector('.faq-content');
            const icon = currentItem.querySelector('.faq-icon');
            const title = currentItem.querySelector('.faq-title');
            
            // Close other items
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active', 'border-[#1B55C5]', 'shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]');
                    item.classList.add('border-gray-200');
                    item.querySelector('.faq-content').style.maxHeight = '0';
                    item.querySelector('.faq-content').classList.replace('mt-3', 'mt-0');
                    item.querySelector('.faq-icon').innerText = '+';
                    item.querySelector('.faq-icon').classList.replace('text-[#1B55C5]', 'text-gray-400');
                    // Reset Title Color to #383838
                    item.querySelector('.faq-title').style.color = '#383838';
                }
            });

            const isOpen = currentItem.classList.contains('active');
            
            if (isOpen) {
                // Return to Default
                currentItem.classList.remove('active', 'border-[#1B55C5]', 'shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]');
                currentItem.classList.add('border-gray-200');
                content.style.maxHeight = '0';
                content.classList.replace('mt-3', 'mt-0');
                icon.innerText = '+';
                icon.classList.replace('text-[#1B55C5]', 'text-gray-400');
                title.style.color = '#383838';
            } else {
                // Set to Active
                currentItem.classList.add('active', 'border-[#1B55C5]', 'shadow-[0px_4px_12px_0px_rgba(0,0,0,0.12)]');
                currentItem.classList.remove('border-gray-200');
                content.style.maxHeight = content.scrollHeight + 'px';
                content.classList.replace('mt-0', 'mt-3');
                icon.innerText = '−';
                icon.classList.replace('text-gray-400', 'text-[#1B55C5]');
                title.style.color = '#103376';
            }
        });
    });
//   home page faq seciton end here

// Request sample modal start
const sampleModal = document.getElementById('sample-modal');
const sampleModalClose = document.getElementById('sample-modal-close');
const requestSampleTriggers = document.querySelectorAll('.request-sample-trigger');

function openSampleModal() {
  if (!sampleModal) return;
  sampleModal.classList.remove('hidden');
  sampleModal.classList.add('flex');
  document.body.classList.add('overflow-hidden');
}

function closeSampleModal() {
  if (!sampleModal) return;
  sampleModal.classList.add('hidden');
  sampleModal.classList.remove('flex');
  document.body.classList.remove('overflow-hidden');
}

requestSampleTriggers.forEach(trigger => {
  trigger.addEventListener('click', (event) => {
    event.preventDefault();
    openSampleModal();
  });
});

if (sampleModalClose) {
  sampleModalClose.addEventListener('click', closeSampleModal);
}

if (sampleModal) {
  sampleModal.addEventListener('click', (event) => {
    if (event.target === sampleModal) {
      closeSampleModal();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeSampleModal();
    }
  });
}
// Request sample modal end
