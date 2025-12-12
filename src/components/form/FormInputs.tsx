import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Check } from "lucide-react";

interface RadioOptionProps {
  value: string;
  label: string;
  selected: boolean;
  onSelect: (value: string) => void;
  disabled?: boolean;
}

export const RadioOption = ({ value, label, selected, onSelect, disabled }: RadioOptionProps) => {
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      disabled={disabled}
      className={cn(
        "flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left w-full",
        selected
          ? "border-waswia-turquoise bg-waswia-turquoise/10"
          : "border-border hover:border-waswia-turquoise/50 hover:bg-muted/50",
        disabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div
        className={cn(
          "w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all",
          selected
            ? "border-waswia-turquoise bg-waswia-turquoise"
            : "border-muted-foreground"
        )}
      >
        {selected && <div className="w-2 h-2 rounded-full bg-primary-foreground" />}
      </div>
      <span className={cn("text-sm", selected && "font-medium")}>{label}</span>
    </button>
  );
};

interface CheckboxOptionProps {
  value: string;
  label: string;
  checked: boolean;
  onToggle: (value: string) => void;
  disabled?: boolean;
  maxReached?: boolean;
}

export const CheckboxOption = ({ value, label, checked, onToggle, disabled, maxReached }: CheckboxOptionProps) => {
  const isDisabled = disabled || (maxReached && !checked);
  
  return (
    <button
      type="button"
      onClick={() => !isDisabled && onToggle(value)}
      disabled={isDisabled}
      className={cn(
        "flex items-center gap-3 p-3 rounded-xl border-2 transition-all duration-200 text-left w-full",
        checked
          ? "border-waswia-turquoise bg-waswia-turquoise/10"
          : "border-border hover:border-waswia-turquoise/50 hover:bg-muted/50",
        isDisabled && "opacity-50 cursor-not-allowed"
      )}
    >
      <div
        className={cn(
          "w-5 h-5 rounded-md border-2 flex items-center justify-center transition-all",
          checked
            ? "border-waswia-turquoise bg-waswia-turquoise"
            : "border-muted-foreground"
        )}
      >
        {checked && <Check className="w-3 h-3 text-primary-foreground" />}
      </div>
      <span className={cn("text-sm", checked && "font-medium")}>{label}</span>
    </button>
  );
};

interface QuestionGroupProps {
  label: string;
  required?: boolean;
  description?: string;
  children: React.ReactNode;
  maxSelections?: number;
  currentSelections?: number;
}

export const QuestionGroup = ({
  label,
  required,
  description,
  children,
  maxSelections,
  currentSelections,
}: QuestionGroupProps) => {
  return (
    <div className="space-y-3">
      <div>
        <Label className="text-base font-medium">
          {label}
          {required && <span className="text-destructive ml-1">*</span>}
        </Label>
        {description && (
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        )}
        {maxSelections && (
          <p className="text-xs text-waswia-turquoise mt-1">
            {currentSelections || 0} / {maxSelections} sélectionnés
          </p>
        )}
      </div>
      <div className="grid gap-2">{children}</div>
    </div>
  );
};

interface TextInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  multiline?: boolean;
}

export const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
  required,
  multiline,
}: TextInputProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-base font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      {multiline ? (
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full min-h-[100px] p-3 rounded-xl border-2 border-border bg-background focus:border-waswia-turquoise focus:outline-none transition-colors resize-none"
        />
      ) : (
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full h-12 px-4 rounded-xl border-2 border-border bg-background focus:border-waswia-turquoise focus:outline-none transition-colors"
        />
      )}
    </div>
  );
};

interface NumberInputProps {
  label: string;
  value: number | undefined;
  onChange: (value: number | undefined) => void;
  placeholder?: string;
  min?: number;
  max?: number;
  suffix?: string;
}

export const NumberInput = ({
  label,
  value,
  onChange,
  placeholder,
  min = 0,
  max = 100,
  suffix,
}: NumberInputProps) => {
  return (
    <div className="space-y-2">
      <Label className="text-sm text-muted-foreground">{label}</Label>
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={value ?? ""}
          onChange={(e) => {
            const val = e.target.value ? parseInt(e.target.value) : undefined;
            onChange(val);
          }}
          placeholder={placeholder}
          min={min}
          max={max}
          className="w-24 h-10 px-3 rounded-lg border-2 border-border bg-background focus:border-waswia-turquoise focus:outline-none transition-colors text-center"
        />
        {suffix && <span className="text-sm text-muted-foreground">{suffix}</span>}
      </div>
    </div>
  );
};

interface RatingInputProps {
  label: string;
  value: number;
  onChange: (value: number) => void;
  required?: boolean;
}

export const RatingInput = ({ label, value, onChange, required }: RatingInputProps) => {
  return (
    <div className="space-y-3">
      <Label className="text-base font-medium">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </Label>
      <div className="flex gap-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <button
            key={rating}
            type="button"
            onClick={() => onChange(rating)}
            className={cn(
              "w-12 h-12 rounded-xl border-2 font-semibold transition-all duration-200",
              value === rating
                ? "border-waswia-turquoise bg-waswia-turquoise text-primary-foreground scale-110"
                : "border-border hover:border-waswia-turquoise/50"
            )}
          >
            {rating}
          </button>
        ))}
      </div>
    </div>
  );
};
