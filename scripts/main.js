// 헤더 그림자 (스크롤 시)
const onScrollNav = () => {
  const menu = document.querySelector('.menu');
  if (!menu) return;
  if (window.scrollY > 2) menu.classList.add('scrolled');
  else menu.classList.remove('scrolled');
};
window.addEventListener('scroll', onScrollNav);
window.addEventListener('DOMContentLoaded', onScrollNav);

// 스크롤 리빌 (절제된 페이드인)
window.addEventListener('DOMContentLoaded', () => {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => {
      if (!en.isIntersecting) return;
      en.target.animate(
        [
          { opacity: 0, transform: 'translateY(12px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ],
        { duration: 420, easing: 'cubic-bezier(.2,.8,.2,1)', fill: 'both' }
      );
      io.unobserve(en.target);
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal, .hero-title, .hero-sub, .card').forEach(el => io.observe(el));
});

// 카드 마우스 하이라이트 (미세한 포인터 반응)
window.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  cards.forEach(card => {
    let rafId = null;

    const move = (e) => {
      const r = card.getBoundingClientRect();
      const x = Math.min(Math.max(e.clientX - r.left, 0), r.width);
      const y = Math.min(Math.max(e.clientY - r.top, 0), r.height);

      // CSS 변수로 하이라이트 위치 전달
      card.style.setProperty('--gx', `${(x / r.width) * 100}%`);
      card.style.setProperty('--gy', `${(y / r.height) * 100}%`);

      if (!card.classList.contains('is-hovered')) card.classList.add('is-hovered');

      if (rafId) cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(() => {
        // 과한 3D/스케일은 배제 (담백하게 유지)
        // 필요 시 여기에서 transform 보간 가능
      });
    };

    const leave = () => {
      if (rafId) cancelAnimationFrame(rafId);
      card.classList.remove('is-hovered');
    };

    card.addEventListener('mousemove', move);
    card.addEventListener('mouseleave', leave);
    // 키보드 접근성
    card.addEventListener('focusin', () => card.classList.add('is-hovered'));
    card.addEventListener('focusout', () => card.classList.remove('is-hovered'));
  });
});
