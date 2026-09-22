import matplotlib.pyplot as plt
import numpy as np
import streamlit as st

# --- إعداد الصفحة العامة ---
st.set_page_config(
    page_title="Math 3 Hub | منصة الرياضيات الجامعية",
    page_icon="📐",
    layout="wide",
    initial_sidebar_state="collapsed",
)

# --- تنسيقات المظهر الداكن والعربي (CSS) ---
st.markdown(
    """
<style>
    @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;900&display=swap');
    
    html, body, [class*="css"] {
        font-family: 'Cairo', sans-serif;
        direction: rtl;
        text-align: right;
    }
    
    .stApp {
        background: linear-gradient(135deg, #0b0f19 0%, #111827 50%, #0f172a 100%);
        color: #f1f5f9;
    }
    
    .hero-card {
        background: rgba(30, 41, 59, 0.7);
        backdrop-filter: blur(12px);
        border: 1px solid rgba(255, 255, 255, 0.08);
        border-radius: 20px;
        padding: 40px;
        text-align: center;
        margin: 20px auto;
        max-width: 850px;
        box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
    }
    
    .branch-card {
        background: rgba(30, 41, 59, 0.6);
        border: 1px solid rgba(99, 102, 241, 0.2);
        border-radius: 16px;
        padding: 28px;
        text-align: center;
        transition: all 0.3s ease;
        margin-bottom: 20px;
    }
    
    .branch-card:hover {
        transform: translateY(-5px);
        border-color: #6366f1;
        box-shadow: 0 10px 25px rgba(99, 102, 241, 0.25);
    }
    
    .content-box {
        background: rgba(17, 24, 39, 0.85);
        border-radius: 14px;
        border-right: 4px solid #38bdf8;
        padding: 22px;
        margin-bottom: 22px;
        line-height: 1.8;
    }
    
    .example-box {
        background: rgba(15, 23, 42, 0.95);
        border: 1px solid #10b981;
        border-radius: 14px;
        padding: 24px;
        margin-top: 15px;
    }
</style>
""",
    unsafe_allow_html=True,
)

# --- إدارة التنقل بين الشاشات ---
if "current_page" not in st.session_state:
  st.session_state.current_page = "welcome"


def go_to(page):
  st.session_state.current_page = page


# ==========================================
# 1. شاشة البداية والترحيب
# ==========================================
if st.session_state.current_page == "welcome":
  st.markdown(
      """
    <div class="hero-card">
        <h1 style="color: #38bdf8; font-size: 3rem; margin-bottom: 10px; font-weight: 900;">📐 MATH 3 HUB</h1>
        <h3 style="color: #94a3b8; font-weight: 600; margin-bottom: 25px;">الملخص الأكاديمي الشامل لمحاضرات الهندسة والعلوم</h3>
        <p style="font-size: 1.15rem; color: #cbd5e1; max-width: 650px; margin: 0 auto 30px auto;">
            مرحباً بك في مرجعك المنظم لمقرر الرياضيات 3. تم تبسيط كافة المفاهيم، القوانين الرياضية، والرسومات التوضيحية ثنائية وثلاثية الأبعاد لتسهيل الاستيعاب.
        </p>
    </div>
    """,
      unsafe_allow_html=True,
  )

  col1, col2, col3 = st.columns([1, 1, 1])
  with col2:
    if st.button("🚀 التالي (Next)", use_container_width=True, type="primary"):
      go_to("branches")

# ==========================================
# 2. شاشة اختيار الفروع (Branches)
# ==========================================
elif st.session_state.current_page == "branches":
  st.markdown(
      """
    <div style="text-align: center; margin-bottom: 40px;">
        <h2 style="color: #f8fafc; font-weight: 800;">اختر المسار الدراسي (Branch)</h2>
        <p style="color: #94a3b8;">اختر القسم الذي تريد استعراض محاضراته وأمثلته التفاعلية</p>
    </div>
    """,
      unsafe_allow_html=True,
  )

  col_a, col_b = st.columns(2)

  with col_a:
    st.markdown(
        """
        <div class="branch-card">
            <h2 style="color: #38bdf8;">🌀 الفرع الأول</h2>
            <h3 style="color: #e2e8f0;">Multivariable Calculus</h3>
            <p style="color: #94a3b8; font-size: 0.95rem;">
                دوال في عدة متغيرات (Several Functions)، خطوط ومستويات المنسوب (Level Curves)، متجه التدرج (Gradient)، والمشتقة الاتجاهية (Directional Derivative).
            </p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    if st.button(
        "فتح محاضرات Several Variables",
        use_container_width=True,
        type="primary",
    ):
      go_to("several_vars")

  with col_b:
    st.markdown(
        """
        <div class="branch-card">
            <h2 style="color: #a855f7;">⚡ الفرع الثاني</h2>
            <h3 style="color: #e2e8f0;">Differential Equations</h3>
            <p style="color: #94a3b8; font-size: 0.95rem;">
                المعادلات التفاضلية الاعتيادية والجزئية (ODEs & PDEs)، معادلات الرتبة الأولى والرتب العليا وطرق حلها.
            </p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    if st.button("فتح محاضرات Differential Equations", use_container_width=True):
      go_to("diff_eq")

  st.markdown(
      "<br><hr style='border-color: rgba(255,255,255,0.05);'>",
      unsafe_allow_html=True,
  )
  if st.button("⬅ العودة للبداية", type="secondary"):
    go_to("welcome")

# ==========================================
# 3. الفرع الأول: Multivariable Calculus
# ==========================================
elif st.session_state.current_page == "several_vars":
  col_nav1, col_nav2 = st.columns([1, 5])
  with col_nav1:
    if st.button("⬅ رجوع للفروع"):
      go_to("branches")
  with col_nav2:
    st.title("📚 Lecture 1: Multivariable Calculus")

  tab1, tab2, tab3 = st.tabs([
      "📝 تفريغ وشرح المحاضرة",
      "📈 رسومات بيانية تفاعلية",
      "💡 المسألة المحلولة بالتفصيل",
  ])

  with tab1:
    st.markdown(
        """
        <div class="content-box">
            <h3 style="color: #38bdf8;">1. منحنيات ومستويات المنسوب (Level Curves & Level Surfaces)</h3>
            <ul>
                <li><b>منحنى المنسوب (Level Curve):</b> للدوال في متغيرين $z = f(x, y) = c$، نقوم بتثبيت الارتفاع $z$ عند ثابت $c$ ينتمي لمجال الدالة. هذا يقطع السطح الـ 3D بمستوى أفقي، لنحصل على منحنى 2D في المستوى $xy$. هذه الطريقة تتيح لنا معرفة شكل التضاريس دون الحاجة لرسم السطح المجسم بالكامل.</li>
                <li><b>مستوى المنسوب (Level Surface):</b> للدوال في 3 متغيرات $w = f(x, y, z) = c$، ينتج عنها سطح ثلاثي الأبعاد 3D.</li>
                <li><b>شروط أساسية لدراسة الدالة:</b> يتم فحص أربعة محاور:
                    <ol>
                        <li><b>التعريف (Defined / Domain):</b> مثل $z = \\frac{xy}{x - y^2}$ معرفة عند كل نقطة بشرط المقام $\\neq 0$ أي $x - y^2 \\neq 0$.</li>
                        <li><b>النهايات (Limits):</b> دراسة اقتراب المسارات المختلفة نحو نقطة $(a, b)$.</li>
                        <li><b>الاتصال (Continuity):</b> أن تكون النهاية موجودة وتساوي قيمة الدالة عند النقطة.</li>
                        <li><b>قابلية الاشتقاق الجزئي (Differentiability):</b> وجود المشتقات الجزئية واستمراريتها.</li>
                    </ol>
                </li>
            </ul>
        </div>
        """,
        unsafe_allow_html=True,
    )

    st.markdown(
        """
        <div class="content-box">
            <h3 style="color: #38bdf8;">2. مؤثر نابلا ومتجه التدرج (Nabla & Gradient Vector)</h3>
            <p>مؤثر نابلا في الفضاء ثلاثي الأبعاد يُعرف كالتالي:</p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.latex(
        r"\nabla = \frac{\partial}{\partial x}\hat{i} +"
        r" \frac{\partial}{\partial y}\hat{j} + \frac{\partial}{\partial"
        r" z}\hat{k}"
    )
    st.write(
        "ومتجه التدرج للدالة $f(x, y, z)$ يعبر عن معدلات التغير في اتجاه"
        " المحاور الأساسية:"
    )
    st.latex(r"\nabla f(x, y, z) = f_x \hat{i} + f_y \hat{j} + f_z \hat{k}")

    st.markdown(
        """
        <div class="content-box">
            <h3 style="color: #38bdf8;">3. المشتقة الاتجاهية (Directional Derivative)</h3>
            <p>المشتقة الاتجاهية $D_{\\vec{u}} f$ تعبر عن معدل تغير الدالة عند النقطة $(a, b)$ في اتجاه أي متجه وحدة $\\vec{u}$:</p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.latex(
        r"D_{\vec{u}} f(a, b) = \nabla f(a, b) \cdot \vec{u} = \|\nabla f\|"
        r" \|\vec{u}\| \cos\theta = \|\nabla f\| \cos\theta"
    )

    st.info("""
        🎯 **قواعد ذهبية للاختبارات:**
        1. **أقصى معدل زيادة للدالة (Max rate of increase):** يحدث عندما تكون $\\theta = 0$ أي الاتجاه منطبق تماماً على متجه التدرج، وقيمته العظمى هي $\\|\\nabla f\\|$.
        2. **أقصى معدل تناقص للدالة (Min rate of decrease):** يحدث عندما تكون $\\theta = \\pi$ أي عكس اتجاه التدرج، وقيمته $-\\|\\nabla f\\|$.
        3. **انعدام التغير (Zero change):** يحدث عندما يكون الاتجاه عمودياً على التدرج $\\theta = 90^\\circ$.
        4. **العلاقة مع منحنيات المنسوب:** متجه التدرج $\\nabla f$ يكون دائماً **عمودياً (Orthogonal / Perpendicular)** على خط المنسوب (Level Curve) المار بالنقطة!
        """)

  with tab2:
    st.subheader("📊 المحاكاة البصرية لخطوط المنسوب ومتجه التدرج")

    x_pt = st.slider("إحداثي X للنقطة P", -2.5, 2.5, 2.0, 0.1)
    y_pt = st.slider("إحداثي Y للنقطة P", -1.5, 1.5, 1.0, 0.1)

    gx = 2 * x_pt * y_pt
    gy = (x_pt**2) - 12 * (y_pt**2)

    col_plot1, col_plot2 = st.columns(2)

    with col_plot1:
      fig, ax = plt.subplots(figsize=(6, 5), facecolor="#0e1726")
      ax.set_facecolor("#0e1726")

      x_vals = np.linspace(-3, 3, 200)
      y_vals = np.linspace(-2, 2, 200)
      X, Y = np.meshgrid(x_vals, y_vals)
      Z = (X**2) * Y - 4 * (Y**3)

      cp = ax.contour(X, Y, Z, levels=25, cmap="plasma", alpha=0.85)
      ax.clabel(cp, inline=True, fontsize=7, fmt="%.1f")

      ax.plot(
          x_pt,
          y_pt,
          "o",
          color="#00ffcc",
          markersize=8,
          label=f"P({x_pt:.1f}, {y_pt:.1f})",
      )
      ax.quiver(
          x_pt,
          y_pt,
          gx * 0.05,
          gy * 0.05,
          angles="xy",
          scale_units="xy",
          scale=1,
          color="#ff3366",
          width=0.012,
          label=r"Gradient $\nabla f$ (عمودي)",
      )

      ax.set_title(
          "Level Curves 2D & Gradient Vector", color="white", fontsize=10
      )
      ax.grid(True, linestyle=":", alpha=0.3)
      ax.tick_params(colors="white")
      ax.legend(
          facecolor="#1e293b", edgecolor="none", labelcolor="white", fontsize=8
      )
      st.pyplot(fig)

    with col_plot2:
      fig3d = plt.figure(figsize=(6, 5), facecolor="#0e1726")
      ax3d = fig3d.add_subplot(111, projection="3d", facecolor="#0e1726")
      surf = ax3d.plot_surface(
          X, Y, Z, cmap="viridis", edgecolor="none", alpha=0.8
      )
      z_pt = (x_pt**2) * y_pt - 4 * (y_pt**3)
      ax3d.plot([x_pt], [y_pt], [z_pt], marker="o", markersize=6, color="#ff3366")
      ax3d.set_title("3D Surface $z = x^2 y - 4y^3$", color="white", fontsize=10)
      ax3d.tick_params(colors="#888888")
      st.pyplot(fig3d)

  with tab3:
    st.markdown(
        """
        <div class="example-box">
            <h3 style="color: #10b981;">حل المسألة المكتوبة على السبورة بالتفصيل</h3>
            <p><b>معطى الدالة:</b></p>
        </div>
        """,
        unsafe_allow_html=True,
    )
    st.latex(r"f(x, y) = x^2 y - 4y^3")
    st.write(
        "والمطلوب حساب المشتقة الاتجاهية $D_{\\vec{u}} f(2, 1)$:[cite: 3, 4]"
    )

    st.markdown("#### الخطوة الأولى: إيجاد متجه التدرج $\\nabla f(x, y)$")
    st.latex(
        r"f_x = \frac{\partial f}{\partial x} = 2xy, \quad f_y ="
        r" \frac{\partial f}{\partial y} = x^2 - 12y^2"
    )
    st.latex(r"\nabla f(x, y) = (2xy)\hat{i} + (x^2 - 12y^2)\hat{j}")
    st.write("بالتعويض عند النقطة $(2, 1)$:[cite: 3, 4]")
    st.latex(
        r"\nabla f(2, 1) = (2(2)(1))\hat{i} + (2^2 - 12(1)^2)\hat{j} = 4\hat{i}"
        r" - 8\hat{j}"
    )

    st.markdown("---")
    st.markdown(
        r"#### المطلوب 1: في اتجاه $\vec{u} = \left(\frac{\sqrt{3}}{2},"
        r" \frac{1}{2}\right)$"
    )
    st.write("بما أنه متجه وحدة جاهز (طوله يساوي 1):[cite: 3, 4]")
    st.latex(
        r"D_{\vec{u}} f(2, 1) = \nabla f(2, 1) \cdot \vec{u} = (4\hat{i} -"
        r" 8\hat{j}) \cdot \left(\frac{\sqrt{3}}{2}\hat{i} +"
        r" \frac{1}{2}\hat{j}\right)"
    )
    st.latex(
        r"= 4\left(\frac{\sqrt{3}}{2}\right) - 8\left(\frac{1}{2}\right) ="
        r" 2\sqrt{3} - 4"
    )

    st.markdown("---")
    st.markdown(r"#### المطلوب 2: في الاتجاه من $(2, 1)$ إلى $(4, 0)$")
    st.write("نحسب متجه الإزاحة أولاً:[cite: 4]")
    st.latex(r"\vec{v} = (4 - 2)\hat{i} + (0 - 1)\hat{j} = 2\hat{i} - \hat{j}")
    st.write("نحوله إلى متجه وحدة بالقسمة على معياره:[cite: 4]")
    st.latex(
        r"\|\vec{v}\| = \sqrt{2^2 + (-1)^2} = \sqrt{5} \implies \vec{u} ="
        r" \frac{2}{\sqrt{5}}\hat{i} - \frac{1}{\sqrt{5}}\hat{j}"
    )
    st.write("نحسب الضرب القياسي:")
    st.latex(
        r"D_{\vec{u}} f(2, 1) = (4\hat{i} - 8\hat{j}) \cdot"
        r" \left(\frac{2}{\sqrt{5}}\hat{i} - \frac{1}{\sqrt{5}}\hat{j}\right) ="
        r" \frac{4(2) + (-8)(-1)}{\sqrt{5}} = \frac{8 + 8}{\sqrt{5}} ="
        r" \frac{16}{\sqrt{5}}"
    )

# ==========================================
# 4. الفرع الثاني: Differential Equations
# ==========================================
elif st.session_state.current_page == "diff_eq":
  col_nav1, col_nav2 = st.columns([1, 5])
  with col_nav1:
    if st.button("⬅ رجوع للفروع"):
      go_to("branches")
  with col_nav2:
    st.title("⚡ Differential Equations (المعادلات التفاضلية)")

  st.markdown(
      """
    <div class="content-box" style="border-right-color: #a855f7;">
        <h3 style="color: #c084fc;">مرحباً بك في فرع المعادلات التفاضلية</h3>
        <p style="color: #cbd5e1; font-size: 1.05rem;">
            هذا القسم مجهز بتصميم مستقل تماماً داخل نفس المشروع.
            <br>
            بمجرد أن ترسل صور ومحتوى محاضرات الـ <b>Differential Equations</b>، سيتم ملء هذا القسم بشرح القوانين، وطرق الحل، ورسومات مسارات الحلول.
        </p>
    </div>
    """,
      unsafe_allow_html=True,
  )
