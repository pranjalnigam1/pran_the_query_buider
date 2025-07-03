export interface RuleGroupType {
  combinator: "and" | "or";
  rules: any[];
}