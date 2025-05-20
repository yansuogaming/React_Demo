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

/* @user/pages/test.twig */
class __TwigTemplate_d60cf60f4a374e4cb5515f727e8ed28c extends Template
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

    protected function doDisplay(array $context, array $blocks = []): iterable
    {
        $macros = $this->macros;
        // line 1
        yield "<a href=\"/\">Home page</a>

<button>Send mail</button>
<script src=\"https://code.jquery.com/jquery-3.7.1.min.js\" integrity=\"sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=\" crossorigin=\"anonymous\"></script>
<script>
    \$(\"button\").click(function () {
        \$.ajax({
            type: \"GET\",
            url: \"/sendmail\",
            dataType: \"json\",
            success: function (response) {
                console.log('response', response);
            }
        });
    })
</script>";
        yield from [];
    }

    /**
     * @codeCoverageIgnore
     */
    public function getTemplateName(): string
    {
        return "@user/pages/test.twig";
    }

    /**
     * @codeCoverageIgnore
     */
    public function getDebugInfo(): array
    {
        return array (  42 => 1,);
    }

    public function getSourceContext(): Source
    {
        return new Source("<a href=\"/\">Home page</a>

<button>Send mail</button>
<script src=\"https://code.jquery.com/jquery-3.7.1.min.js\" integrity=\"sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo=\" crossorigin=\"anonymous\"></script>
<script>
    \$(\"button\").click(function () {
        \$.ajax({
            type: \"GET\",
            url: \"/sendmail\",
            dataType: \"json\",
            success: function (response) {
                console.log('response', response);
            }
        });
    })
</script>", "@user/pages/test.twig", "/var/www/html/modules/user/views/pages/test.twig");
    }
}
