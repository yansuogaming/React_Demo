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
class __TwigTemplate_442b31379209d41d82189e908b813448 extends Template
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
            action=\"";
        // line 44
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Vietiso\Core\Twig\Extension\RouteExtension']->generatorUrlByRoute("handle_register"), "html", null, true);
        yield "\"
            method=\"post\"
        >
            ";
        // line 47
        yield $this->extensions['Vietiso\Core\Twig\Extension\CsrfExtension']->generateCsrfToken();
        yield "
            <div class=\"mb-3\">
                <sl-input
                    label=\"Họ và Tên\"
                    name=\"name\"
                    type=\"text\"
                    placeholder=\"Nhập họ và tên của bạn\"
                    required
                    value=\"";
        // line 55
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Vietiso\Core\Twig\Extension\OldInputExtension']->getOldInput("name"), "html", null, true);
        yield "\"
                >
                </sl-input>
                ";
        // line 58
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "name", [], "any", true, true, false, 58)) {
            // line 59
            yield "                    <span style=\"color: red\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 59, $this->source); })()), "name", [], "any", false, false, false, 59), 0, [], "array", false, false, false, 59), "html", null, true);
            yield "</span>
                ";
        }
        // line 61
        yield "            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Email\"
                    name=\"email\"
                    type=\"text\"
                    placeholder=\"Nhập địa chỉ email của bạn\"
                    required
                    value=\"";
        // line 69
        yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape($this->extensions['Vietiso\Core\Twig\Extension\OldInputExtension']->getOldInput("email"), "html", null, true);
        yield "\"
                >
                </sl-input>
                ";
        // line 72
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "email", [], "any", true, true, false, 72)) {
            // line 73
            yield "                    <span style=\"color: red\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 73, $this->source); })()), "email", [], "any", false, false, false, 73), 0, [], "array", false, false, false, 73), "html", null, true);
            yield "</span>
                ";
        }
        // line 75
        yield "            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Mật khẩu\"
                    name=\"password\"
                    type=\"password\"
                    placeholder=\"Tạo mật khẩu\"
                    password-toggle
                    required
                ></sl-input>
                ";
        // line 85
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "password", [], "any", true, true, false, 85)) {
            // line 86
            yield "                    <span style=\"color: red\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 86, $this->source); })()), "password", [], "any", false, false, false, 86), 0, [], "array", false, false, false, 86), "html", null, true);
            yield "</span>
                ";
        }
        // line 88
        yield "            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Xác nhận mật khẩu\"
                    name=\"password_confirmation\"
                    type=\"password\"
                    placeholder=\"Password Toggle\"
                    password-toggle
                ></sl-input>
                ";
        // line 97
        if (CoreExtension::getAttribute($this->env, $this->source, ($context["errors"] ?? null), "password_confirmation", [], "any", true, true, false, 97)) {
            // line 98
            yield "                    <span style=\"color: red\">";
            yield $this->env->getRuntime('Twig\Runtime\EscaperRuntime')->escape(CoreExtension::getAttribute($this->env, $this->source, CoreExtension::getAttribute($this->env, $this->source, (isset($context["errors"]) || array_key_exists("errors", $context) ? $context["errors"] : (function () { throw new RuntimeError('Variable "errors" does not exist.', 98, $this->source); })()), "password_confirmation", [], "any", false, false, false, 98), 0, [], "array", false, false, false, 98), "html", null, true);
            yield "</span>
                ";
        }
        // line 100
        yield "            </div>
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
        return array (  181 => 100,  175 => 98,  173 => 97,  162 => 88,  156 => 86,  154 => 85,  142 => 75,  136 => 73,  134 => 72,  128 => 69,  118 => 61,  112 => 59,  110 => 58,  104 => 55,  93 => 47,  87 => 44,  42 => 1,);
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
            action=\"{{route('handle_register')}}\"
            method=\"post\"
        >
            {{csrf_token()}}
            <div class=\"mb-3\">
                <sl-input
                    label=\"Họ và Tên\"
                    name=\"name\"
                    type=\"text\"
                    placeholder=\"Nhập họ và tên của bạn\"
                    required
                    value=\"{{'name'|old}}\"
                >
                </sl-input>
                {% if errors.name is defined %}
                    <span style=\"color: red\">{{errors.name[0]}}</span>
                {% endif %}
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Email\"
                    name=\"email\"
                    type=\"text\"
                    placeholder=\"Nhập địa chỉ email của bạn\"
                    required
                    value=\"{{'email'|old}}\"
                >
                </sl-input>
                {% if errors.email is defined %}
                    <span style=\"color: red\">{{errors.email[0]}}</span>
                {% endif %}
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Mật khẩu\"
                    name=\"password\"
                    type=\"password\"
                    placeholder=\"Tạo mật khẩu\"
                    password-toggle
                    required
                ></sl-input>
                {% if errors.password is defined %}
                    <span style=\"color: red\">{{ errors.password[0] }}</span>
                {% endif %}
            </div>
            <div class=\"mb-3\">
                <sl-input
                    label=\"Xác nhận mật khẩu\"
                    name=\"password_confirmation\"
                    type=\"password\"
                    placeholder=\"Password Toggle\"
                    password-toggle
                ></sl-input>
                {% if errors.password_confirmation is defined %}
                    <span style=\"color: red\">{{errors.password_confirmation[0]}}</span>
                {% endif %}
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
