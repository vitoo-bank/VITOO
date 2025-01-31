
// تنظیمات نمودارها
const chartConfig = {
    type: 'line',
    options: {
        responsive: true,
        plugins: {
            legend: {
                display: false,
            },
        },
    },
};

// داده‌های نمونه برای نمودارها
const kncData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
        label: 'KNC',
        data: [10.2, 10.3, 10.25, 10.28, 10.26],
        borderColor: '#6200ea',
        tension: 0.4,
    }],
};

const egyData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
        label: 'EGY',
        data: [0.85, 0.88, 0.89, 0.87, 0.9],
        borderColor: '#00bcd4',
        tension: 0.4,
    }],
};

const etfData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
        label: 'ETF',
        data: [2.0, 2.1, 2.05, 2.08, 2.1],
        borderColor: '#ff9800',
        tension: 0.4,
    }],
};

const oshData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
        label: 'OSH',
        data: [1.7, 1.75, 1.72, 1.74, 1.76],
        borderColor: '#4caf50',
        tension: 0.4,
    }],
};

const gryData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
        label: 'GRY',
        data: [0.4, 0.42, 0.45, 0.43, 0.44],
        borderColor: '#f44336',
        tension: 0.4,
    }],
};

// ایجاد نمودارها
new Chart(document.getElementById('kncChart'), { ...chartConfig, data: kncData });
new Chart(document.getElementById('egyChart'), { ...chartConfig, data: egyData });
new Chart(document.getElementById('etfChart'), { ...chartConfig, data: etfData });
new Chart(document.getElementById('oshChart'), { ...chartConfig, data: oshData });
new Chart(document.getElementById('gryChart'), { ...chartConfig, data: gryData });
// داده‌های ATANK (ATK)
const atkData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
      label: 'ATK',
      data: [5.4, 5.5, 5.6, 5.45, 5.55],
      borderColor: '#ff5722',
      tension: 0.4,
    }],
  };
  
  // داده‌های FREUP (FEP)
  const fepData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
      label: 'FEP',
      data: [1.1, 1.15, 1.2, 1.18, 1.22],
      borderColor: '#03a9f4',
      tension: 0.4,
    }],
  };
  
  // داده‌های EUROHS (EUR)
  const eurData = {
    labels: ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد'],
    datasets: [{
      label: 'EUR',
      data: [0.98, 0.99, 1.0, 0.97, 1.01],
      borderColor: '#8bc34a',
      tension: 0.4,
    }],
  };
  
  // ایجاد نمودارها
  new Chart(document.getElementById('atkChart'), { ...chartConfig, data: atkData });
  new Chart(document.getElementById('fepChart'), { ...chartConfig, data: fepData });
  new Chart(document.getElementById('eurChart'), { ...chartConfig, data: eurData });
// بررسی وضعیت ورود کاربر
const isLoggedIn = false; // این مقدار باید از سرور یا localStorage دریافت شود

const assetsContent = document.querySelector('.assets-content');
const loginModal = document.getElementById('loginModal');

if (!isLoggedIn) {
    assetsContent.classList.add('blur-background');
    loginModal.classList.add('active');
}

// مدیریت فرم ورود
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // در اینجا می‌توانید منطق ورود کاربر را پیاده‌سازی کنید
    // پس از ورود موفق، مقدار isLoggedIn را به true تغییر دهید
    isLoggedIn = true;
    assetsContent.classList.remove('blur-background');
    loginModal.classList.remove('active');
});

// مدیریت دکمه ثبت نام
const registerBtn = document.querySelector('.register-btn');
registerBtn.addEventListener('click', function() {
    // در اینجا می‌توانید کاربر را به صفحه ثبت نام هدایت کنید
    window.location.href = 'login.html';
});
