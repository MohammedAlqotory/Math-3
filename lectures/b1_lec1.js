registerLecture('b1', {
    id: 'b1_lec1',
    title: 'Lecture 1',
    subtitle: 'Level Curves & Directional Derivative',
    contentHtml: `
        <h2>📚 Lecture 1: Multivariable Calculus</h2>
        
        <div class="content-box">
            <h3>1. منحنيات ومستويات المنسوب (Level Curves & Surfaces)</h3>
            <div style="margin-bottom: 12px;">
                <b>• منحنى المنسوب (Level Curve):</b>
                <p style="color: var(--text-muted); margin-top: 4px;">
                    - الدالة الأصلية: دالة في متغيرين مستقلين \\(z = f(x, y)\\) ورسمها يحتاج مجسم 3D.<br>
                    - الفكرة: تثبيت الارتفاع عند ثابت \\(z = c\\) لتقطيع السطح بمستوى أفقي.<br>
                    - النتيجة: علاقة بين متغيرين تُرسم كـ <b>منحنى 2D</b> في المستوى \\(xy\\).
                </p>
                <p style="color:#facc15; font-size:0.92rem; margin-top:6px;">💡 <b>تخيلها:</b> خطوط الكنتور في الخرائط الجغرافية التي تمثل الارتفاعات الثابتة في رسمة مسطحة.</p>
            </div>

            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.08); margin: 10px 0;">

            <div style="margin-bottom: 12px;">
                <b>• مستوى/سطح المنسوب (Level Surface):</b>
                <p style="color: var(--text-muted); margin-top: 4px;">
                    - الدالة الأصلية: دالة في 3 متغيرات مستقلة \\(w = f(x, y, z)\\).<br>
                    - الفكرة: تثبيت الناتج عند ثابت \\(w = c\\).<br>
                    - النتيجة: علاقة تربط 3 متغيرات وتُرسم كـ <b>سطح مجسم 3D</b>.
                </p>
            </div>

            <table class="info-table">
                <thead>
                    <tr>
                        <th>المفهوم</th>
                        <th>الدالة الأصلية</th>
                        <th>المعادلة الناتجة</th>
                        <th>مكان وشكل الرسم</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>Level Curve</b></td>
                        <td>\\(z = f(x, y)\\)</td>
                        <td>\\(f(x, y) = c\\)</td>
                        <td>منحنى في المستوى <b>2D</b></td>
                    </tr>
                    <tr>
                        <td><b>Level Surface</b></td>
                        <td>\\(w = f(x, y, z)\\)</td>
                        <td>\\(f(x, y, z) = c\\)</td>
                        <td>سطح مجسم في الفراغ <b>3D</b></td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class="content-box">
            <h3>2. مؤثر نابلا ومتجه التدرج (Gradient Vector)</h3>
            <p>مؤثر نابلا في 3D:</p>
            <div class="math-block">
                $$\\nabla = \\frac{\\partial}{\\partial x}\\hat{i} + \\frac{\\partial}{\\partial y}\\hat{j} + \\frac{\\partial}{\\partial z}\\hat{k}$$
            </div>
            <p>متجه التدرج للدالة \\(f(x, y, z)\\):</p>
            <div class="math-block">
                $$\\nabla f(x, y, z) = f_x \\hat{i} + f_y \\hat{j} + f_z \\hat{k}$$
            </div>
        </div>

        <div class="content-box">
            <h3>3. المشتقة الاتجاهية (Directional Derivative)</h3>
            <p>معدل تغير الدالة في اتجاه متجه وحدة \\(\\vec{u}\\):</p>
            <div class="math-block">
               <!-- تعديل نص القانون ليشمل معيار u -->
<div class="math-block">
    $$D_{\vec{u}} f(a, b) = \nabla f(a, b) \cdot \vec{u} = \|\nabla f(a, b)\| \|\vec{u}\| \cos \theta = \|\nabla f(a, b)\| \cos \theta \quad (\text{لأن } \|\vec{u}\| = 1)$$
</div>

<!-- صندوق توضيح طرق إيجاد متجه الوحدة u -->
<div class="content-box" style="margin-top: 15px; border-right: 4px solid var(--accent); background: rgba(255, 255, 255, 0.03); padding: 14px;">
    <h4 style="color: #38bdf8; margin-bottom: 10px;">📌 كيف نحصل على متجه الوحدة \(\vec{u}\) إذا لم يكن معطى بشكل مباشر؟</h4>
    <ol style="padding-right: 20px; line-height: 1.8;">
        <li style="margin-bottom: 10px;">
            <b>إذا أُعطي متجه عادي في الاتجاه \(\vec{v}\):</b>
            <br>
            نقسم المتجه على معياره ليتحول لمتجه وحدة:
            <div class="math-block" style="margin: 6px 0;">
                $$\vec{u} = \frac{\vec{v}}{\|\vec{v}\|}$$
            </div>
        </li>
        <li style="margin-bottom: 10px;">
            <b>إذا أُعطي اتجاه من نقطة إلى أخرى (من \(P\) نحو \(Q\)):</b>
            <br>
            نحسب متجه الإزاحة \(\vec{PQ} = Q - P\) أولاً، ثم نقسمه على معياره:
            <div class="math-block" style="margin: 6px 0;">
                $$\vec{u} = \frac{\vec{PQ}}{\|\vec{PQ}\|}$$
            </div>
        </li>
        <li style="margin-bottom: 10px;">
            <b>إذا أُعطيت زاوية \(\theta\) يصنعها الاتجاه مع محور \(x\) الموجب:</b>
            <br>
            نستخدم الصورة المثلثية المباشرة (وهي بطبيعتها متجه وحدة معياره 1):
            <div class="math-block" style="margin: 6px 0;">
                $$\vec{u} = \langle \cos \theta, \sin \theta \rangle \quad \text{أو} \quad \vec{u} = \cos \theta\,\hat{i} + \sin \theta\,\hat{j}$$
            </div>
        </li>
    </ol>
</div>
            </div>
            <div style="background: rgba(56, 189, 248, 0.05); border: 1px dashed rgba(56, 189, 248, 0.3); border-radius: 10px; padding: 14px; margin-top: 12px; font-size: 0.95rem;">
                <b>📌 قواعد الاختبارات:</b><br>
                - <b>أقصى معدل زيادة:</b> عند \\(\\theta = 0\\) وقيمتها \\(\\|\\nabla f\\|\\).<br>
                - <b>أقصى تناقص:</b> عند \\(\\theta = \\pi\\) وقيمتها \\(-\\|\\nabla f\\|\\).<br>
                - <b>معدل تغير صفري:</b> عند \\(\\theta = 90^\\circ\\).<br>
                - <b>خاصية هندسية:</b> متجه التدرج \\(\\nabla f\\) يكون دائماً <b>عمودياً</b> على منحنى المنسوب (Level Curve).
            </div>
        </div>

        <div class="example-box">
            <h3 style="color: #10b981;">💡 حل مسألة المحاضرة بالتفصيل</h3>
            <p><b>الدالة المعطاة:</b></p>
            <div class="math-block">
                $$f(x, y) = 4y^3 - x^2 y$$
            </div>
            <p><b>1. حساب متجه التدرج عند النقطة \\((2, 1)\\):</b></p>
            <div class="math-block">
                $$f_x = -2xy \\implies f_x(2, 1) = -4$$
            </div>
            <div class="math-block">
                $$f_y = 12y^2 - x^2 \\implies f_y(2, 1) = 8$$
            </div>
            <div class="math-block">
                $$\\nabla f(2, 1) = -4\\hat{i} + 8\\hat{j}$$
            </div>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 14px 0;">
            <p><b>2. المطلوب الأول: في اتجاه \\(\\vec{u} = \\frac{\\sqrt{3}}{2}\\hat{i} + \\frac{1}{2}\\hat{j}\\):</b></p>
            <div class="math-block">
                $$D_{\\vec{u}} f(2, 1) = (-4)\\left(\\frac{\\sqrt{3}}{2}\\right) + (8)\\left(\\frac{1}{2}\\right) = 4 - 2\\sqrt{3}$$
            </div>
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 14px 0;">
            <p><b>3. المطلوب الثاني: في الاتجاه من \\((2, 1)\\) إلى \\((4, 0)\\):</b></p>
            <div class="math-block">
                $$\\vec{v} = (4-2)\\hat{i} + (0-1)\\hat{j} = 2\\hat{i} - \\hat{j} \\implies \\vec{u} = \\frac{2}{\\sqrt{5}}\\hat{i} - \\frac{1}{\\sqrt{5}}\\hat{j}$$
            </div>
            <div class="math-block">
                $$D_{\\vec{u}} f(2, 1) = \\frac{-8 - 8}{\\sqrt{5}} = -\\frac{16}{\\sqrt{5}}$$
            </div>
        </div>
    `
});
