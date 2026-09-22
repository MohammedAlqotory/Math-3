# 📐 Math 3 Hub

مستودع مخصص لتلخيص وتوثيق محاضرات مقرر **Math 3** والتطبيقات التفاعلية المصاحبة لها.

---

## 🌀 Branch 1: Multivariable Calculus (Several Variables)

### 📌 Lecture 1 Summary

#### 1. منحنيات ومستويات المنسوب (Level Curves & Surfaces)
- **Level Curve:** للدوال $z = f(x, y) = c$، يتم تثبيت الارتفاع $c$ لمعرفة سلوك السطح وتضاريسه في بعدين 2D.
- **Level Surface:** للدوال في 3 متغيرات $w = f(x, y, z) = c$ وينتج عنها سطح مجسم 3D.
- دراسة الدالة تتطلب فحص: **المجال (Domain)**، **النهايات (Limits)**، **الاتصال (Continuity)**، و**الاشتقاق (Differentiability)**.

#### 2. مؤثر نابلا ومتجه التدرج (Gradient Vector)
- مؤثر نابلا:
  $$\nabla = \frac{\partial}{\partial x}\hat{i} + \frac{\partial}{\partial y}\hat{j} + \frac{\partial}{\partial z}\hat{k}$$
- متجه التدرج للدالة:
  $$\nabla f(x, y, z) = f_x \hat{i} + f_y \hat{j} + f_z \hat{k}$$

#### 3. المشتقة الاتجاهية (Directional Derivative)
- القانون العام في اتجاه متجه الوحدة $\vec{u}$:
  $$D_{\vec{u}} f(a, b) = \nabla f(a, b) \cdot \vec{u} = \|\nabla f\| \cos\theta$$
- **أقصى زيادة:** عندما $\theta = 0$ وتساوي $\|\nabla f\|$.
- **أقصى تناقص:** عندما $\theta = \pi$ وتساوي $-\|\nabla f\|$.
- **انعدام التغير:** عندما $\theta = \pi / 2$.
- **خاصية هندسية أساسية:** متجه التدرج $\nabla f$ يكون دائماً **عمودياً** على منحنى المنسوب (Level Curve) المار بالنقطة.

---

### 💡 مسألة المحاضرة المحلولة
الدالة المعطاة:
$$f(x, y) = x^2 y - 4y^3$$
المطلوب حساب $D_{\vec{u}} f(2, 1)$:

1. **حساب التدرج عند النقطة $(2, 1)$:**
   $$\nabla f(x, y) = (2xy)\hat{i} + (x^2 - 12y^2)\hat{j} \implies \nabla f(2, 1) = 4\hat{i} - 8\hat{j}$$
2. **المطلوب الأول:** في اتجاه $\vec{u} = \left(\frac{\sqrt{3}}{2}, \frac{1}{2}\right)$:
   $$D_{\vec{u}} f(2, 1) = 4\left(\frac{\sqrt{3}}{2}\right) - 8\left(\frac{1}{2}\right) = 2\sqrt{3} - 4$$
3. **المطلوب الثاني:** في الاتجاه من $(2, 1)$ إلى $(4, 0)$:
   - متجه الإزاحة: $\vec{v} = 2\hat{i} - \hat{j}$
   - متجه الوحدة: $\vec{u} = \frac{2}{\sqrt{5}}\hat{i} - \frac{1}{\sqrt{5}}\hat{j}$
   - المشتقة الاتجاهية:
     $$D_{\vec{u}} f(2, 1) = \frac{4(2) + (-8)(-1)}{\sqrt{5}} = \frac{16}{\sqrt{5}}$$

---

## ⚡ Branch 2: Differential Equations
سيتم إضافة تلخيص المحاضرات والمسائل فور بدء القسم.
