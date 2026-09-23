registerLecture('b2', {
    id: 'b2_lec1',
    title: 'Lecture 1',
    subtitle: 'Classification, Solutions & Conditions of ODEs',
    contentHtml: `
        <h2>⚡ Lecture 1: Introduction to Differential Equations</h2>
        
        <!-- 1. التعريف والتصنيف -->
        <div class="content-box">
            <h3 style="color: var(--accent);">1. ما هي المعادلة التفاضلية؟ (Definition of DE)</h3>
            <p>
                <b>المعادلة التفاضلية (Differential Equation):</b> هي أي علاقة رياضية تحتوي على مشتقات لدالة مجهولة (متغير تابع - Dependent Variable) بالنسبة لمتغير آخر أو أكثر (متغير مستقل - Independent Variable).
            </p>
            
            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.08); margin: 12px 0;">

            <h4 style="color: #f1f5f9; margin-bottom: 8px;">تصنيفات المعادلات التفاضلية (Classification of DEs):</h4>
            <ol style="padding-right: 20px;">
                <li style="margin-bottom: 8px;">
                    <b>حسب النوع (Type):</b>
                    <ul>
                        <li><b>عادية (Ordinary Differential Equation - ODE):</b> تحتوي على مشتقات عادية بالنسبة لمتغير مستقل <u>واحد فقط</u>، مثل: \\(y(x)\\) حيث \\(x y' + x^2 y'' = y \\sin x\\).</li>
                        <li><b>جزئية (Partial Differential Equation - PDE):</b> تحتوي على مشتقات جزئية بالنسبة لأكثر من متغير مستقل، مثل: \\(z(x, y)\\) حيث \\(z_{xx} + z_{yy} + \\frac{z}{x} = z_{xy}\\) (تُدرس لاحقاً في Math 4).</li>
                    </ul>
                </li>
                <li style="margin-bottom: 8px;">
                    <b>الرتبة (Order):</b>
                    <p style="color: var(--text-muted); margin-top: 3px;">
                        هي <b>أعلى مشتقة</b> تظهر داخل المعادلة. يُرمز للمشتقة من الرتبة \\(n\\) بالرموز: \\(y^{(n)} = D^n y = \\frac{d^n y}{dx^n}\\).
                    </p>
                </li>
                <li style="margin-bottom: 8px;">
                    <b>الدرجة (Degree):</b>
                    <p style="color: var(--text-muted); margin-top: 3px;">
                        هو <b>الأس المرفوع لأعلى مشتقة</b> في المعادلة، بشرط التخلص من الكسور والجذور في المشتقات.
                    </p>
                    <div class="rule-item" style="border-color: rgba(168, 85, 247, 0.4); background: rgba(168, 85, 247, 0.05);">
                        💡 <b>مثال الكشكول:</b> في المعادلة \\(x y'' + x^2 y^{(IV)} + x y^3 = 5 (y''')^2\\):<br>
                        - أعلى تفاضل هو المشتقة الرابعة \\(y^{(IV)}\\) \\(\\implies\\) <b>Order = 4</b>.<br>
                        - الأس المرفوع له \\(y^{(IV)}\\) هو واحد \\(\\implies\\) <b>Degree = 1</b>.
                    </div>
                </li>
                <li style="margin-bottom: 8px;">
                    <b>الخطية (Linearity):</b>
                    <p style="color: var(--text-muted); margin-top: 3px;">تكون المعادلة <b>خطية (Linear)</b> إذا تحققت الشروط الثلاثة الآتية معاً:</p>
                    <ul style="color: #cbd5e1;">
                        <li>المتغير التابع \\(y\\) وكل مشتقاته من الدرجة الأولى (الأس = 1).</li>
                        <li>عدم وجود حاصل ضرب المتغير التابع في مشتقاته (مثل \\(y y'\\) ممنوع).</li>
                        <li>عدم وجود دوال غير خطية أو مثلثية تؤثر على \\(y\\) أو مشتقاته (مثل \\(\\sin y\\), \\(e^y\\), \\(\\ln y'\\) ممنوعة).</li>
                    </ul>
                </li>
                <li style="margin-bottom: 8px;">
                    <b>التجانس (Homogeneity):</b>
                    <p style="color: var(--text-muted); margin-top: 3px;">
                        في المعادلات الخطية، تكون المعادلة <b>متجانسة (Homogeneous)</b> إذا كان الطرف الأيمن الخالي من \\(y\\) ومشتقاته يساوي صفراً: \\(F(x, y, y', \\dots, y^{(n)}) = 0\\). أما إذا كان هناك حد يعتمد على \\(x\\) فقط، تسمى <b>غير متجانسة (Non-homogeneous)</b>.
                    </p>
                </li>
            </ol>
        </div>

        <!-- 2. أنواع الحلول -->
        <div class="content-box">
            <h3 style="color: var(--accent);">2. حلول المعادلات التفاضلية (Solutions of ODEs)</h3>
            <ul>
                <li><b>صريح (Explicit Solution):</b> يكتب على الصورة \\(y = f(x)\\).</li>
                <li><b>ضمني (Implicit Solution):</b> يكتب على صورة علاقة صفرية \\(g(x, y) = 0\\).</li>
                <li><b>الحل العام (General Solution \\(y_G\\)):</b> يحتوي على ثوابت اختيارية حرة (\\(C_1, C_2, \\dots, C_n\\)) ويكون عدد الثوابت مساوياً لرتبة المعادلة (Order).</li>
                <li><b>الحل الخاص (Particular Solution \\(y_P\\)):</b> ينتج من الحل العام بتعيين قيم محددة للثوابت باستخدام شروط مساعدة.</li>
            </ul>
        </div>

        <!-- 3. الشروط الابتدائية والشروط الحدية -->
        <div class="content-box">
            <h3 style="color: var(--accent);">3. الشروط الابتدائية والحدية (Conditions of ODE)</h3>
            <table class="info-table">
                <thead>
                    <tr>
                        <th>النوع</th>
                        <th>الاسم بالكامل</th>
                        <th>طبيعة الشروط</th>
                        <th>أمثلة وتطبيقات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><b>IVP</b></td>
                        <td>Initial Value Problem</td>
                        <td>كل الشروط معطاة عند <b>نفس النقطة</b> (عادة عند \\(x = x_0\\) أو \\(t = 0\\))</td>
                        <td>\\(y(0) = 1, \\quad y'(0) = 2\\)</td>
                    </tr>
                    <tr>
                        <td><b>BVP</b></td>
                        <td>Boundary Value Problem</td>
                        <td>الشروط معطاة عند <b>أكثر من نقطة</b> مختلفة على حدود الفترة</td>
                        <td>\\(y(0) = 0, \\quad y(\\frac{\\pi}{2}) = 1\\)</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- 4. حل المسائل المعطاة في المحاضرة والكتاب بالتفصيل -->
        <div class="example-box">
            <h3 style="color: #10b981;">💡 المسائل والتطبيقات العملية المشروحة بالتفصيل</h3>

            <!-- المسألة الأولى -->
            <h4 style="color: #38bdf8;">• المسألة الأولى (من السبورة والكتاب صـ 12):</h4>
            <p><b>نص المسألة:</b> أوجد قيمة الثابت \\(m\\) بحيث تكون الدالة \\(y = e^{mx}\\) حلاً للمعادلة التفاضلية:</p>
            <div class="math-block">
                $$y'' + 3y' + 2y = 0$$
            </div>
            <p><b>خطوات الحل:</b></p>
            <p>1. نشتق دالة الحل المفترضة:</p>
            <div class="math-block">
                $$y = e^{mx} \\implies y' = m e^{mx} \\implies y'' = m^2 e^{mx}$$
            </div>
            <p>2. نعوض في المعادلة التفاضلية الأصلية:</p>
            <div class="math-block">
                $$m^2 e^{mx} + 3(m e^{mx}) + 2(e^{mx}) = 0$$
            </div>
            <p>3. نأخذ العامل المشترك \\(e^{mx} \\neq 0\\):</p>
            <div class="math-block">
                $$e^{mx} (m^2 + 3m + 2) = 0 \\implies (m + 2)(m + 1) = 0$$
            </div>
            <div class="math-block">
                $$\\therefore m = -2 \\quad \\text{أو} \\quad m = -1$$
            </div>
            <p>ينتج حلان مستقلان: \\(y_1 = e^{-2x}\\) و \\(y_2 = e^{-x}\\). ويكون الحل العام (General Solution):</p>
            <div class="math-block">
                $$y_G = C_1 e^{-2x} + C_2 e^{-x}$$
            </div>

            <hr style="border: 0; border-top: 1px solid rgba(255,255,255,0.1); margin: 15px 0;">

            <!-- المسألة الثانية -->
            <h4 style="color: #38bdf8;">• المسألة الثانية (تكوين المعادلة التفاضلية - من السبورة صـ 19 والكتاب صـ 10):</h4>
            <p><b>نص المسألة:</b> Find 2nd order ODE that has \\(y = e^{2x}\\) as a solution.</p>
            <p><b>خطوات الحل:</b></p>
            <div class="math-block">
                $$y = e^{2x} \\implies y' = 2e^{2x} \\implies y'' = 4e^{2x}$$
            </div>
            <p>بملاحظة أن \\(e^{2x} = y\\)، بالتعويض في المشتقة الثانية:</p>
            <div class="math-block">
                $$y'' = 4y \\implies y'' - 4y = 0$$
            </div>
            <p style="color: var(--text-muted); font-size: 0.95rem;">
                وهي معادلة تفاضلية خطية من الرتبة الثانية ذات معاملات ثابتة حلها \\(y = e^{2x}\\).
            </p>
        </div>
    `
});
