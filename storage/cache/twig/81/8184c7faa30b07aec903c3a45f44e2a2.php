<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\CoreExtension;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;
use Twig\TemplateWrapper;

/* @user/components/register.twig */
class __TwigTemplate_7b5c6d177b0a3ad79b103dc525548cad extends Template
{
    private Source $source;
    /**
     * @var array<string, Template>
     */
    private array $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        yield "<div id=\"form-container\" class=\"container\">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #667eea, #764ba2);
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
    
        .container {
            max-width: 400px;
            width: 100%;
        }
    
        sl-card {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    
        sl-button {
            width: 100%;
            margin-top: 1rem;
        }
    
        .header {
            text-align: center;
            margin-bottom: 1rem;
        }
    </style>
    <sl-card class=\"mx-auto w-[500px] block\">
        <div class=\"header\">
            <sl-avatar
                image=\"https://cdn-icons-png.flaticon.com/512/3135/3135715.png\"
                style=\"margin-bottom: 0.5rem;\"
            ></sl-avatar>
            <h2>Đăng Ký</h2>
            <p>Hãy tham gia cùng chúng tôi!</p>
        </div>
        <form
            action=\"/handle-register\"
            method=\"post\"
        >
            <div class=\"mb-3\">
                <sl-input
                    label=\"Họ và Tên\"
                    name=\"name\"
                    type=\"text\"
                    placeholder=\"Nhập họ và tên của bạn\"
                    required
                >
                </sl-input>
                ";
        // line 56
        if ( !Twig\Extension\CoreExtension::testEmpty((isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 56, $this->source); })()))) {
            // line 57
            yield "                    <span style=\"color: red\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 57, $this->source); })()), "email", [], "any", false, false, false, 57), 0, [], "array", false, false, false, 57), "html", null, true);
            yield "</span>
                ";
        }
        // line 59
        yield "            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Email\"
                    name=\"email\"
                    type=\"text\"
                    class=\"mb-3\"
                    placeholder=\"Nhập địa chỉ email của bạn\"
                    required
                >
                </sl-input>
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Mật khẩu\"
                    name=\"password\"
                    type=\"password\"
                    placeholder=\"Tạo mật khẩu\"
                    password-toggle
                    required
                    class=\"mb-3\"
                ></sl-input>
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Xác nhận mật khẩu\"
                    name=\"password_confirmation\"
                    type=\"password\"
                    placeholder=\"Password Toggle\"
                    password-toggle
                    required
                    class=\"mb-3\"
                ></sl-input>
            </div>
            <sl-checkbox required>
                Tôi đồng ý với
                <a href=\"#\" target=\"_blank\">Điều khoản sử dụng</a>.
            </sl-checkbox>
            <sl-button type=\"submit\" variant=\"primary\">Đăng Ký</sl-button>
        </form>
    </sl-card>
</div>";
        return; yield '';
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "@user/components/register.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function isTraitable(): bool
    {
        return false;
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  107 => 59,  101 => 57,  99 => 56,  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<div id=\"form-container\" class=\"container\">
    <style>
        body {
            font-family: Arial, sans-serif;
            background: linear-gradient(to right, #667eea, #764ba2);
            color: #333;
            margin: 0;
            padding: 0;
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
        }
    
        .container {
            max-width: 400px;
            width: 100%;
        }
    
        sl-card {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
    
        sl-button {
            width: 100%;
            margin-top: 1rem;
        }
    
        .header {
            text-align: center;
            margin-bottom: 1rem;
        }
    </style>
    <sl-card class=\"mx-auto w-[500px] block\">
        <div class=\"header\">
            <sl-avatar
                image=\"https://cdn-icons-png.flaticon.com/512/3135/3135715.png\"
                style=\"margin-bottom: 0.5rem;\"
            ></sl-avatar>
            <h2>Đăng Ký</h2>
            <p>Hãy tham gia cùng chúng tôi!</p>
        </div>
        <form
            action=\"/handle-register\"
            method=\"post\"
        >
            <div class=\"mb-3\">
                <sl-input
                    label=\"Họ và Tên\"
                    name=\"name\"
                    type=\"text\"
                    placeholder=\"Nhập họ và tên của bạn\"
                    required
                >
                </sl-input>
                {% if errors is not empty %}
                    <span style=\"color: red\">{{errors.email[0]}}</span>
                {% endif %}
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Email\"
                    name=\"email\"
                    type=\"text\"
                    class=\"mb-3\"
                    placeholder=\"Nhập địa chỉ email của bạn\"
                    required
                >
                </sl-input>
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Mật khẩu\"
                    name=\"password\"
                    type=\"password\"
                    placeholder=\"Tạo mật khẩu\"
                    password-toggle
                    required
                    class=\"mb-3\"
                ></sl-input>
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Xác nhận mật khẩu\"
                    name=\"password_confirmation\"
                    type=\"password\"
                    placeholder=\"Password Toggle\"
                    password-toggle
                    required
                    class=\"mb-3\"
                ></sl-input>
            </div>
            <sl-checkbox required>
                Tôi đồng ý với
                <a href=\"#\" target=\"_blank\">Điều khoản sử dụng</a>.
            </sl-checkbox>
            <sl-button type=\"submit\" variant=\"primary\">Đăng Ký</sl-button>
        </form>
    </sl-card>
</div>", "@user/components/register.twig", "/var/www/html/modules/user/views/components/register.twig");
    }
}
